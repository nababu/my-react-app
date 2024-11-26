import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      console.log('API response:', data);
      if (Array.isArray(data.categories)) {
        setCategories(data.categories);
      } else if (Array.isArray(data)) {
        setCategories(data);
      } else {
        throw new Error('Unexpected data structure');
      }
    } catch (err) {
      setError('Error fetching categories: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductCategoryClick = (categoryId, productCategoryId) => {
    navigate(`/category/${categoryId}/product-category/${productCategoryId}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0f4f8',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header />
      <Navigation />
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          color: '#2c3e50',
          marginBottom: '20px',
          fontSize: '28px',
          fontWeight: 'bold',
        }}>Categories</h2>
        {loading && <p style={{ color: '#2c3e50' }}>Loading categories...</p>}
        {error && <p style={{ color: '#e74c3c' }}>{error}</p>}
        {categories.length === 0 && !loading && !error && (
          <p style={{ color: '#2c3e50' }}>No categories found.</p>
        )}
        <div style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}>
          {categories.map((category) => (
            <div key={category.id} style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e0e0',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#0a192f',
                color: 'white',
              }}>
                <h3 style={{ fontSize: '22px', margin: 0 }}>{category.name}</h3>
              </div>
              <div style={{
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flexGrow: 1,
              }}>
                {category.productCategories && category.productCategories.map((productCategory) => (
                  <div 
                    key={productCategory.id}
                    onClick={() => handleProductCategoryClick(category.id, productCategory.id)}
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      backgroundColor: '#ecf0f1',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#d5dbdb';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#ecf0f1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <h4 style={{ color: '#2c3e50', margin: 0, fontSize: '16px' }}>{productCategory.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;