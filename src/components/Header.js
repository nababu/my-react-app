import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const commonStyles = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px', // Base font size set to 12px
  };


  const headerStyle = {
    ...commonStyles,
    backgroundColor: isDarkMode ? '#1a1a1a' : '#0a192f',
    color: isDarkMode ? '#ffffff' : 'white',
    width: '100%'
  };

  const topBarStyle = {
    ...commonStyles,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
  };

  const searchBarStyle = {
    ...commonStyles,
    backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
    color: isDarkMode ? '#fff' : '#000'
  };

  const buttonStyle = {
    ...commonStyles,
    textDecoration: 'none',
    marginLeft: '15px',
  };


  const skipToMainStyle = {
    ...commonStyles,
    fontSize: '12px', // Reduced font size to 12px
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <header style={headerStyle}>
      {/* Top bar */}
      <div style={topBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{
                background: 'transparent',
                color: '#ffd700', // Golden yellow color
                border: 'none',
                fontSize: '12px', // Changed to 12px
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'white' }}>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                style={{ width: '16px', height: '16px', marginLeft: '5px', transition: 'transform 0.3s ease' }}
                transform={isLanguageOpen ? 'rotate(180)' : 'rotate(0)'}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isLanguageOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
                padding: '5px 0',
                margin: '5px 0 0',
                listStyle: 'none',
                zIndex: 1000,
                minWidth: '150px',
              }}>
                {[
                  { code: 'en', name: 'English' },
                  { code: 'hi', name: 'हिन्दी (Hindi)' },
                  { code: 'bn', name: 'বাংলা (Bengali)' },
                  { code: 'te', name: 'తెలుగు (Telugu)' },
                  { code: 'mr', name: 'मराठी (Marathi)' },
                  { code: 'ta', name: 'தமிழ் (Tamil)' },
                  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
                  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
                  { code: 'ml', name: 'മലയാളം (Malayalam)' },
                  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
                ].map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        // Handle language change here
                        setIsLanguageOpen(false);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#333',
                        padding: '5px 15px',
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="darkMode"
              style={{ marginRight: '5px' }}
              onChange={toggleDarkMode}
              checked={isDarkMode}
            />
            <label htmlFor="darkMode" style={{ fontSize: '12px' }}>Dark Mode</label>
          </span>
          <span style={{ margin: '0 15px', fontSize: '12px' }}>Font Size A- A A+</span>
          <Link 
            to="/" 
            style={skipToMainStyle}
          >
            Skip to Main Content
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '15px', fontSize: '12px' }}>Raise a Ticket</span>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                fontSize: '12px', // Changed to 12px
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Need Help?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                style={{ 
                  width: '16px', 
                  height: '16px', 
                  marginLeft: '5px', 
                  transition: 'transform 0.3s ease',
                  transform: isHelpOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isHelpOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                backgroundColor: isDarkMode ? '#333' : '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '10px 0',
                margin: '5px 0 0',
                listStyle: 'none',
                zIndex: 1000,
                minWidth: '150px',
              }}>
                {['FAQs', 'Feedback', 'Document Help', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        // Handle menu item click here
                        setIsHelpOpen(false);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isDarkMode ? '#fff' : '#333',
                        padding: '10px 20px',
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = isDarkMode ? '#444' : '#f0f0f0'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      {/* Main header content */}
      <div style={{ ...commonStyles, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/gem-logo.svg'} alt="GeM Logo" style={{ height: '70px', width: '250px' }} />
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', marginRight: '20px', display: 'flex' }}>
            <select style={{...searchBarStyle, padding: '8px', borderRadius: '20px 0 0 20px', border: 'none', fontSize: '14px'}}>
              <option value="all">All</option>
              <option value="products">Products</option>
              <option value="services">Services</option>
              <option value="content">Content</option>
              <option value="courses">Courses</option>
            </select>
            <input 
              type="text" 
              placeholder="Looking for something on GeM?" 
              style={{...searchBarStyle, padding: '8px 35px 8px 15px', borderRadius: '0 20px 20px 0', border: 'none', width: '300px', fontSize: '14px'}} 
            />
            <button style={{ 
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <DropdownMenu
            title="Forward Auction"
            items={['Ongoing Auctions', 'FA Buyer Registration', 'FA Buyer Login']}
          />
          <DropdownMenu
            title="Bids"
            items={['List of Bids', 'Railway Bids', 'BPB Notices']}
          />
          <DropdownMenu
            title="Sign Up"
            items={['Buyer Organization', 'Seller/Service Provider']}
          />
          <Link to="/login" style={{...buttonStyle, color: isDarkMode ? '#ffffff' : 'white', fontSize: '14px'}}>Login</Link>
        </div>
      </div>
    </header>
  );
};


const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const { isDarkMode } = useTheme();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };


  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // 300ms delay before closing
  };


  const handleItemClick = (item) => {
    setIsOpen(false);
    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div 
      style={{ position: 'relative', marginLeft: '15px', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '5px 10px',
          color: isDarkMode ? '#ffffff' : 'white',
          fontSize: '14px',
        }}
      >
        {title} <span style={{ marginLeft: '5px', display: 'inline-block', transition: 'transform 0.3s ease' }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul 
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: isDarkMode ? '#333333' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#333333',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '10px 0',
            margin: '0',
            listStyle: 'none',
            minWidth: 'max-content', // Changed from fixed width to max-content
            zIndex: 1000,
            whiteSpace: 'nowrap', // Prevent text wrapping
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => handleItemClick(item)}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '10px 20px',
                  fontSize: '12px',
                  transition: 'background-color 0.2s',
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = isDarkMode ? '#444444' : '#f0f0f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;