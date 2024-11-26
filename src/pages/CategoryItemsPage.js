import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  IconButton,
  Container,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const RatingBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#4caf50',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
}));

const DiscountBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ff9800',
  color: 'white',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
}));

const CategoryItemsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('Price:Low to High');
  const [totalProducts, setTotalProducts] = useState(0);
  const { categoryId, productCategoryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryName, productCategoryName } = location.state || {};

  useEffect(() => {
    fetchCategoryItems();
  }, [categoryId, productCategoryId]);

  const fetchCategoryItems = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/items/category/${categoryId}/product-category/${productCategoryId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      console.log('API Response:', data);

      if (Array.isArray(data)) {
        setItems(data);
      } else if (data && Array.isArray(data.items)) {
        setItems(data.items);
      } else {
        setItems([]);
      }

      setTotalProducts(data.totalProducts || data.length || 0);
    } catch (err) {
      console.error('Error fetching items:', err);
      setError('Error fetching items: ' + err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const calculateDiscountPercentage = (mrp, offerPrice) => {
    return Math.round(((mrp - offerPrice) / mrp) * 100);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sorting logic here
  };

  const handleItemClick = (item) => {
    navigate(`/item/${item.id}`, { state: { item } });
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Header />
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={handleBackClick} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="h1" gutterBottom>
            {productCategoryName || 'Product Category'}
          </Typography>
        </Box>
        
        {/* Product count and sorting */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">
            Showing {items.length} of {totalProducts} products in {productCategoryName || 'this category'}
          </Typography>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 100 }}>
            <InputLabel id="sort-select-label">Sort by</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              label="Sort by"
              sx={{ fontSize: '12px' }}
            >
              <MenuItem sx={{ fontSize: '12px' }} value="Price:Low to High">Price:Low to High</MenuItem>
              <MenuItem sx={{ fontSize: '12px' }}value="Price:High to Low">Price:High to Low</MenuItem>
              {/* Add more sorting options as needed */}
            </Select>
          </FormControl>
        </Box>

        {loading && <Typography>Loading items...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {!loading && !error && items.length === 0 && (
          <Typography>No items found.</Typography>
        )}
        {items.length > 0 && (
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <StyledCard onClick={() => handleItemClick(item)}>
                  <StyledCardMedia
                    image={item.imageUrl}
                    title={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Seller: {item.seller.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <RatingBox sx={{ mr: 1 }}>
                        {item.seller.sellerExcellenceRating.toFixed(1)}
                        <StarIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
                      </RatingBox>
                      {item.seller.isVerifiedByOEM && (
                        <Tooltip title="Verified by OEM">
                          <VerifiedIcon color="primary" sx={{ fontSize: '1.2rem' }} />
                        </Tooltip>
                      )}
                    </Box>
                    <Typography variant="body2" gutterBottom>
                      Product ID: {item.productId}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Min. Qty. Per Consignee: {item.minQuantityPerConsignee}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mt: 2 }}>
                      <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                        {formatPrice(item.offerPrice)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                        {formatPrice(item.mrp)}
                      </Typography>
                      <DiscountBox>
                        {calculateDiscountPercentage(item.mrp, item.offerPrice)}% OFF
                      </DiscountBox>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CategoryItemsPage;