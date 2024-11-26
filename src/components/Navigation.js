import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Box,
  IconButton,
  Badge,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navigation = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      if (Array.isArray(data.categories)) {
        setCategories(data.categories);
      } else if (Array.isArray(data)) {
        setCategories(data);
      } else {
        throw new Error('Unexpected data structure');
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
    setHoveredItem(null);
  };

  const handleDirectLink = (name) => {
    navigate(`/${name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleProductCategoryClick = (categoryId, productCategoryId, categoryName, productCategoryName) => {
    navigate(`/category/${categoryId}/product-category/${productCategoryId}`, {
      state: { categoryName, productCategoryName }
    });
    handleMenuClose();
  };

  const menuItems = [
    { name: 'CATEGORIES', icon: <MenuIcon />, items: ['Products', 'Services', 'Browse all Categories', 'Browse all Products', 'Browse all Brands'] },
    { name: 'FEATURES & BENEFITS', items: ['GeM Exclusive', 'GeM Advantages'] },
    { name: 'SELLERS ON GEM', items: ['Rate a Seller', 'Seller Details'] },
    { name: 'VIEW CONTRACTS', items: ['GeM Contracts', 'Railway Contract'] },
    { name: 'CPPP', items: ['CPPP Tenders', 'GeM-CPPP', 'Procurement Data'] },
    { name: 'BUSINESS OPPORTUNITIES', items: [] },
    { name: 'ODOP', items: [] },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: '#0a192f', 
        height: '40px',
        borderTop: '0.2px solid white',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'flex-start',
          minHeight: '40px !important', 
          padding: '0 16px',
          pl: '40px',
          height: '100%',
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            minHeight: '40px',
            alignItems: 'center', 
            height: '100%',
            flex: 1,
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={item.name}
              onMouseEnter={(e) => item.items.length > 0 ? handleMenuOpen(e, item.name) : null}
              onMouseLeave={handleMenuClose}
              onClick={() => item.items.length === 0 ? handleDirectLink(item.name) : null}
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                marginLeft: index === 0 ? '40px' : '0',
                marginRight: index === 0 ? '100px' : '0',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0 8px',
                  marginX: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                {item.icon && (
                  <span style={{ marginRight: '4px', display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </span>
                )}
                {item.name}
                {item.items.length > 0 && item.name !== 'CATEGORIES' && (
                  <KeyboardArrowDownIcon sx={{ fontSize: 16, ml: 0.5 }} />
                )}
              </Typography>
              <Popper
                open={openMenu === item.name}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 1300 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
                  >
                    <Paper sx={{ 
                      bgcolor: item.name === 'CATEGORIES' ? 'white' : '#0a192f', 
                      color: item.name === 'CATEGORIES' ? '#333' : 'white', 
                      mt: '1px',
                    }}>
                      <ClickAwayListener onClickAway={handleMenuClose}>
                        <Box p={2}>
                          {item.name === 'CATEGORIES' ? (
                            <Box display="flex">
                              <Box width="auto">
                                {item.items.map((subItem) => (
                                  <MenuItem
                                    key={subItem}
                                    component={Link}
                                    to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                    // onClick={handleMenuClose}
                                    onMouseEnter={() => handleItemHover(subItem)}
                                    sx={{ 
                                      fontSize: '12px',
                                      padding: '4px 10px 8px 8px',
                                      color: '#333',
                                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                                    }}
                                  >
                                    {subItem}
                                  </MenuItem>
                                ))}
                              </Box>
                              {hoveredItem === 'Products' && (
                                <Box ml={2} width="800px" sx={{ borderLeft: '1px solid #e0e0e0', paddingLeft: 2, flexGrow: 1 }}>
                                  <Typography variant="h6" sx={{ 
                                    mb: 0, 
                                    color: '#333', 
                                    fontSize: '14px', 
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    display: 'inline-block',
                                    '&::after': {
                                      content: '""',
                                      position: 'absolute',
                                      left: 0,
                                      bottom: '-4px',
                                      width: '100%',
                                      height: '3px',
                                      backgroundColor: '#FFA500',
                                    }
                                  }}>
                                    Popular Product Categories
                                  </Typography>
                                  <Box sx={{ borderTop: '1px solid #e0e0e0', mt: 0.5, pt: 2 }}>
                                    <Grid container spacing={2}>
                                      {categories.map((category) => (
                                        <Grid item xs={3} key={category.id}>
                                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333', fontSize: '12px' }}>{category.name}</Typography>
                                          {category.productCategories && category.productCategories.map((productCategory) => (
                                            <Typography
                                              key={productCategory.id}
                                              variant="body2"
                                              component="span"
                                              onClick={() => handleProductCategoryClick(category.id, productCategory.id, category.name, productCategory.name)}
                                              sx={{
                                                display: 'block',
                                                color: '#666',
                                                textDecoration: 'none',
                                                '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                                                mb: 0.5,
                                                fontSize: '11px',
                                              }}
                                            >
                                              {productCategory.name}
                                            </Typography>
                                          ))}
                                        </Grid>
                                      ))}
                                    </Grid>
                                  </Box>
                                </Box>
                              )}
                            </Box>
                          ) : (
                            <Box>
                              {item.items.map((subItem) => (
                                <MenuItem
                                  key={subItem}
                                  component={Link}
                                  to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  onClick={handleMenuClose}
                                  sx={{ 
                                    fontSize: '12px',
                                    padding: '8px 16px',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                                  }}
                                >
                                  {subItem}
                                </MenuItem>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', right: '16px' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: 'white',
              fontWeight: 'bold',
              mr: 2,
              cursor: 'pointer',
            }}
          >
            New on GeM
          </Typography>
          <IconButton color="inherit" size="small">
            <Badge badgeContent={0} color="error">
              <NotificationsIcon sx={{ fontSize: '20px' }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default Navigation;