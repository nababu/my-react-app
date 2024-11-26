import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const backgrounds = [
  '/background.png'
  // '/background2.jpg',
  // '/background3.jpg',
  // '/background4.jpg'  
];


const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleShopNowClick = () => {
    navigate('/categories');
  };

  return (
    <div className="hero-container" style={{ 
      position: 'relative',
      width: '100%',
      height: '60vh', // Reduced from 100vh to 60vh
      overflow: 'hidden'
    }}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL + bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentBg ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Changed to 'center'
        height: '100%',
        padding: '0 50px',
      }}>
         {/* <button 
          onClick={handleShopNowClick}
          style={{ 
            backgroundColor: '#3498db', // Changed from '#ff4500' to a blue color
            color: 'white', 
            padding: '10px 25px', // Slightly reduced padding
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px', // Slightly reduced font size
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            position: 'absolute', // Added
            right: '20%', // Added
            top: '50%', // Added
            transform: 'translateY(-50%)', // Added
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#ff6347';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ff4500';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          SHOP NOW
        </button> */}
      </div>
      <button 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px', // Reduced from 40px
          height: '30px', // Reduced from 40px
          fontSize: '16px', // Reduced from 20px
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        &#8249;
      </button>
      <div style={{
        position: 'absolute',
        bottom: '10px', // Reduced from 20px
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px', // Reduced from 10px
        zIndex: 2,
      }}>
        {backgrounds.map((_, index) => (
          <div 
            key={index} 
            style={{
              width: '8px', // Reduced from 10px
              height: '8px', // Reduced from 10px
              borderRadius: '50%',
              backgroundColor: index === currentBg ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentBg(index)}
          />
        ))}
      </div>
      <button 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px', // Reduced from 40px
          height: '30px', // Reduced from 40px
          fontSize: '16px', // Reduced from 20px
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Hero;