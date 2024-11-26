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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f0f4f8' }}>
        {loading && <p>Loading categories...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <div>
            <h2 style={{ marginBottom: '20px' }}>Popular Product Categories</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {categories.map((category) => (
                <div key={category.id} style={{ width: 'calc(25% - 15px)', marginBottom: '20px' }}>
                  <h3 style={{ marginBottom: '10px', color: '#3498db' }}>{category.name}</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {category.productCategories && category.productCategories.map((productCategory) => (
                      <li 
                        key={productCategory.id}
                        onClick={() => handleProductCategoryClick(category.id, productCategory.id)}
                        style={{
                          cursor: 'pointer',
                          padding: '5px 0',
                          color: '#2c3e50',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#3498db'}
                        onMouseOut={(e) => e.target.style.color = '#2c3e50'}
                      >
                        {productCategory.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
