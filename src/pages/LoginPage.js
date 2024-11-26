import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, Button, InputAdornment, IconButton, Container } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [gemId, setGemId] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, my: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1, bgcolor: '#1e1e2f', p: 3, borderRadius: 2, color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Need help with your Login?
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HelpOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                Raise a Ticket
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Agents and experts available on a single platform ready to help you
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: helpdesk-gem[at]gov[dot]in
            </Typography>
            <Typography variant="body2">
              Call: 1-800-419-3436 / 1-800-102-3436
            </Typography>
            <Typography variant="body2">
              (9:00 a.m. - 10:00 p.m. Mon to Sat)
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Not Registered with GeM ? Sign up to experience the Marketplace
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link to="/register-buyer" style={{ textDecoration: 'none', color: 'blue' }}>
                  Register as Buyer
                </Link>
                <Link to="/register-seller" style={{ textDecoration: 'none', color: 'blue' }}>
                  Register as Seller
                </Link>
              </Box>
            </Box>
            <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Login in to Government e Marketplace | GeM
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="GeM User Id"
                  variant="outlined"
                  value={gemId}
                  onChange={(e) => setGemId(e.target.value)}
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <HelpOutlineIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Type the characters in the box below."
                  variant="outlined"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="body2" color="primary" sx={{ mr: 1 }}>
                          RQWE3N
                        </Typography>
                        <IconButton>
                          <RefreshIcon color="primary" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Password shall be entered on next screen post successful GeM login ID and Captcha validation
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: 'orange', '&:hover': { bgcolor: 'darkorange' } }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default LoginPage;
