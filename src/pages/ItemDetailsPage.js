import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { styled } from '@mui/material/styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Add this import at the top of your file
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Add this import at the top of your file
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Modal, Fade, Backdrop } from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

// Add this styled component
const DiscountBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ff9800',
  color: 'white',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
}));

// Update this styled component
const TrendBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  borderBottom: `4px solid orange`,
  color: theme.palette.warning.main,
  fontWeight: 'bold',
  padding: theme.spacing(1, 2), // Increased padding
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  fontSize: '1rem', // Increased font size
}));

// Update this styled component for the underlined heading
const UnderlinedHeading = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingBottom: theme.spacing(1),
  marginBottom: 0,
  fontWeight: 'bold',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -1,
    width: '100%',
    borderBottom: '3.5px solid #FFA500',
  }
}));

const HeadingWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    left: -1,
    right: -1,
    bottom: -1,
    borderBottom: '1px solid #e0e0e0',
  }
}));

const BackButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    '& .MuiSvgIcon-root': {
      transform: 'translateX(-4px)',
    },
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
}));

const ItemDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  if (!item) {
    return <Typography>Item not found</Typography>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const calculateDiscountPercentage = (mrp, offerPrice) => {
    return Math.round(((mrp - offerPrice) / mrp) * 100);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      <Header />
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <BackButton onClick={handleBackClick}>
          <KeyboardArrowLeftIcon sx={{ 
            fontSize: '2rem', 
            transition: 'transform 0.3s',
            color: 'text.secondary',
          }} />
          <Typography 
            variant="subtitle1" 
            sx={{ 
              ml: 1, 
              transition: 'color 0.3s',
              color: 'text.secondary',
            }}
          >
            Back to search results
          </Typography>
        </BackButton>
        
        <Box sx={{ display: 'flex', mt: 2 }}>
          <Box sx={{ 
            width: '40%', 
            flexShrink: 0, 
            mr: 2, 
            position: 'sticky', 
            top: 16, 
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 200px)',
          }}>
            <Card sx={{ 
              bgcolor: 'grey.100', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2, // Add padding here
            }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ 
                  width: 'auto', // Change from 100% to auto
                  maxWidth: '100%', // Add maxWidth
                  maxHeight: 'calc(100vh - 232px)', // Adjust for padding
                  objectFit: 'contain', 
                  cursor: 'pointer'
                }}
                onClick={handleOpenModal}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 16, // Adjust for padding
                  right: 16, // Adjust for padding
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                onClick={handleOpenModal}
              >
                <ZoomOutMapIcon />
              </IconButton>
            </Card>
          </Box>
          <Box sx={{ width: '60%' }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal' }}>
                {item.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                {item.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                <Typography variant="h4" color="primary" sx={{ mr: 2 }}>
                  ₹{item.offerPrice}
                </Typography>
                <DiscountBox>
                  {calculateDiscountPercentage(item.mrp, item.offerPrice)}% OFF
                </DiscountBox>
              </Box>
              <TrendBox>
                <TrendingUpIcon color="warning" sx={{ mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  Trends
                </Typography>
              </TrendBox>
            </Box>

            <Card sx={{ mb: 2, bgcolor: 'white', border: '1px solid #e0e0e0' }}>
              <CardContent sx={{ p: 2 }}>
                <HeadingWrapper>
                  <UnderlinedHeading variant="h6">
                    Product Details
                  </UnderlinedHeading>
                </HeadingWrapper>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Price For :</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">1 pieces</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">MRP/Unit:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">₹ {item.mrp.toLocaleString('en-IN')}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Offer Price/Unit:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" fontWeight="bold">₹ {item.offerPrice.toLocaleString('en-IN')}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Availability:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon color="success" sx={{ mr: 1, fontSize: '1rem' }} />
                        <Typography variant="body2">{item.availability} In Stock</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Min. Qty. Per Consignee:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">{item.minQuantityPerConsignee}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Product id:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">{item.productId}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Country Of Origin:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">{item.countryOfOrigin}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Local Content (MII):</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">{item.localContent}%</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Certification:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <VerifiedUserIcon sx={{ color: 'success.main', mr: 1 }} />
                        <Typography variant="body2">BIS Certified</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2, bgcolor: 'white', border: '1px solid #e0e0e0' }}>
              <CardContent sx={{ p: 2 }}>
                <HeadingWrapper>
                  <UnderlinedHeading variant="h6">
                    Seller Details
                  </UnderlinedHeading>
                </HeadingWrapper>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Sold by:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">{item.seller.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">OEM verified Reseller:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <CheckCircleIcon color="success" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">OEM verified catalogue:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <CheckCircleIcon color="success" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Seller Excellence:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Chip label={item.seller.sellerExcellenceRating} color="success" size="small" />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: 'white', border: '1px solid #e0e0e0' }}>
              <CardContent sx={{ p: 2 }}>
                <HeadingWrapper>
                  <UnderlinedHeading variant="h6">
                    Specifications
                  </UnderlinedHeading>
                </HeadingWrapper>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Processor Make:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Intel</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Processor Generation:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">13</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Number of Cores per Processor:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">10</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Processor Description:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Intel Core i7</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Processor Number:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Intel Core i7 1365U</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Size of Memory in Case of Dedicated Graphic Card (GB):</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">0</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">Operating System (Factory Pre-Loaded):</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Windows 11 Professional</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '90vh',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2, // Add padding here
            }}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ItemDetailsPage;