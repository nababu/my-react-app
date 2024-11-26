import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div style={{
      backgroundColor: '#003366', // Navy blue background
      width: '100%', // Full width
    }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        color: 'white', // White text color for contrast
      }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleHomeClick}>
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="GeM 2.0 Logo" 
            style={{ 
              height: '70px', // Slightly reduced height
              width: '200px', // Increased width
              objectFit: 'contain', // This ensures the entire logo is visible
              marginRight: '20px' 
            }} 
          />
          <span style={{ fontSize: '28px', fontWeight: 'bold' }}>GeM 2.0</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', marginRight: '20px' }}>
            <li onClick={handleHomeClick} style={{ cursor: 'pointer' }}>HOME</li>
            <li><Link to="/categories" style={{ color: 'white', textDecoration: 'none' }}>CATEGORIES</Link></li>
            <li>CONTACT</li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search items..."
              style={{
                padding: '10px 15px',
                marginRight: '10px',
                borderRadius: '20px',
                border: '2px solid #ffffff',
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '14px',
                width: '200px',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.width = '250px';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.width = '200px';
              }}
            />
            <button style={{ 
              background: 'none', 
              border: '2px solid #ffffff', 
              borderRadius: '20px', 
              padding: '10px 15px', 
              marginRight: '10px', 
              color: 'white', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            </button>
            <button style={{ 
              background: '#ffffff', 
              border: 'none', 
              borderRadius: '20px', 
              padding: '10px 15px', 
              color: '#003366', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}>
              <Link to="/signup" style={{ color: '#003366', textDecoration: 'none' }}>Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
