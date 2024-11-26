import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const bannerData = [
  { id: 1, image: '/vocalforlocal/saras-icon-min.png', title: 'Saras Ajeevika', url: '/saras-collection' },
  { id: 2, image: '/vocalforlocal/web_banner_ODOP.jpg', title: 'ODOP', url: '/odop-gem-bazaar' },
  { id: 3, image: '/vocalforlocal/startup-runway-icon-min.png', title: 'Startup Runway', url: '/startup-showcase' },
  { id: 4, image: '/vocalforlocal/WEb-banner-initiative-section.png', title: 'The Aabhar Collection', url: '/aatmanirbhar-collection' },
  { id: 5, image: '/vocalforlocal/india-handloom-icon-min.png', title: 'India Handloom', url: '/handloom-collection' },
  { id: 6, image: '/vocalforlocal/india-handicraft-icon-min.png', title: 'India Handicraft', url: '/handicrafts-collection' },
  { id: 7, image: '/vocalforlocal/1st_Banner.jpg', title: 'Womaniya', url: '/womaniya-on-gem' },
  { id: 8, image: '/vocalforlocal/millets-lan1_1678775654.jpg', title: 'Millets', url: '/millet-collection' },
];

const PromotionalBanners = () => {
  const navigate = useNavigate();

  const handleBannerClick = (url) => {
    navigate(url);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontFamily: '"Arial Black", sans-serif',
          fontWeight: 10,
          fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },
          mb: 1,
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)',
          background: `
            linear-gradient(
              to bottom,
              #FF9933 0%,
              #FF9933 55%,
              #FFFFFF 10%,
              #FFFFFF 10%,
              #138808 66%,
              #138808 100%
            )
          `,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          padding: '0 10px',
          letterSpacing: '0.05em',
          textTransform: 'lowercase',
        }}
      >
        #vocalforlocal
      </Typography>
      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
        GeM Outlet Stores
      </Typography>
      <Box sx={{ maxWidth: '90%', margin: '0 auto' }}>
        <Grid container spacing={2}>
          {bannerData.map((banner) => (
            <Grid item xs={12} sm={6} md={3} key={banner.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '80px',
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleBannerClick(banner.url)}
              >
                <Box
                  component="img"
                  src={banner.image}
                  alt={banner.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 99, 71, 0.7)', // Semi-transparent orange
                    backdropFilter: 'blur(0.5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: 'white', 
                      textAlign: 'center', 
                      padding: 1,
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {banner.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PromotionalBanners;
