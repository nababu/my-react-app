import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Store user details in localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      console.log('Sign up successful:', email);
      navigate('/login');
    } catch (err) {
      setError('Failed to create an account');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header />
      <Navigation />
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#003366',
            fontSize: '28px',
            fontWeight: 'bold',
          }}>Create Your Account</h2>
          {error && <p style={{ color: '#e53e3e', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={inputContainerStyle}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <div style={inputContainerStyle}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <div style={inputContainerStyle}>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button type="submit" style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = '#002244'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#003366'}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p style={{ textAlign: 'center', marginTop: '25px', color: '#003366' }}>
            Already have an account? <Link to="/login" style={{ color: '#003366', fontWeight: 'bold' }}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const inputContainerStyle = { 
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const inputStyle = {
  width: '100%',
  padding: '12px 20px',
  borderRadius: '25px',
  border: '2px solid #e2e8f0',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  transition: 'all 0.3s ease',
  outline: 'none',
  textAlign: 'center',
  color: '#333',
};

const buttonStyle = {
  width: '50%',
  padding: '10px',
  backgroundColor: '#003366',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  outline: 'none',
};

export default SignUpPage;
