import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box>
      {/* First block: White background with black text */}
      <Box sx={{ bgcolor: 'white', color: 'black', py: 1 }}>
        <Container maxWidth="xl">
          <Typography variant="caption" align="center" display="block" sx={{ fontSize: '0.7rem' }}>
            This site is designed, developed and maintained by Managed Service Provider. Site is hosted at Government Community Cloud (GCC) and is owned by Government e Marketplace (GeM)
          </Typography>
        </Container>
      </Box>

      {/* Second block: Dark gray background with clickable images */}
      <Box sx={{ bgcolor: '#333333', py: 1 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Link href="https://commerce.gov.in/" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/dept-commerce.png" alt="Department of Commerce" height="30" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://nssh.gov.in/" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/nssh.png" alt="National SC ST Hub" height="40" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/digital-india.png" alt="Digital India" height="30" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/gem-india.jpg" alt="India.gov.in" height="30" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.stqc.gov.in/" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/stqc1.png" alt="STQC" height="30" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://wcd.nic.in/bbbp-schemes" target="_blank" rel="noopener noreferrer">
                <img src="/footerimg/betibachao-logo.png" alt="GeM Logo" height="60" />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Third block: White background with content and social media icons */}
      <Box sx={{ bgcolor: 'white', py: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" align="center" sx={{ flex: 1, mr: 2, fontSize: '0.75rem' }}>
              Government e Marketplace is a 100 percent Government owned Section 8 company setup under the aegis of Department of Commerce, Ministry of Commerce and Industry for procurement of common use goods and services by government ministries, departments and CPSEs.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="https://twitter.com/GeM_India" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                <Box sx={{ bgcolor: '#D3D3D3', borderRadius: '50%', width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </Box>
              </Link>
              <Link href="https://www.facebook.com/GeM.India" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                <Box sx={{ bgcolor: '#3b5998', borderRadius: '50%', width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/>
                  </svg>
                </Box>
              </Link>
              <Link href="https://www.youtube.com/channel/UCCjzVKdXjXGKCE6Ckh_RcTg" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                <Box sx={{ bgcolor: '#FF0000', borderRadius: '50%', width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <YouTubeIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
              </Link>
              <Link href="https://www.linkedin.com/company/government-e-marketplace-gem-/" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                <Box sx={{ bgcolor: '#0A66C2', borderRadius: '50%', width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <LinkedInIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
              </Link>
              <Link href="https://gem.gov.in/" target="_blank" rel="noopener noreferrer" sx={{ mx: 0.5 }}>
                <Box sx={{ bgcolor: 'black', borderRadius: '50%', width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <LanguageIcon sx={{ color: 'white', fontSize: 20 }} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
