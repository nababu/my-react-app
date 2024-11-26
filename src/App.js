import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  createTheme } from '@mui/material/styles';
import { ThemeProvider } from './context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryItemsPage from './pages/CategoryItemsPage';
import ItemDetailsPage from './pages/ItemDetailsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366',
    },
    secondary: {
      main: '#ff4500',
    },
  },
});


function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:categoryId/product-category/:productCategoryId" element={<CategoryItemsPage />} />
          <Route path="/item/:itemId" element={<ItemDetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;