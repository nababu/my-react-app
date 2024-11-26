import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

const FlashNews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const theme = useTheme();

  const message = "Important Notice: Please report to the GeM helpdesk immediately if you experience any login in issues, especially buyers. We apologize for any inconvenience. GeM has implemented its latest revenue policy. Direct Purchase and L1 purchase limits have been enhanced as per GFR amendment.";

  const parts = message.split("GeM has implemented its latest revenue policy.");

  const scrollAnimation = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  `;

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed as needed
      container.style.animationDuration = `${animationDuration}s`;
    }
  }, [message]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[100],
        padding: '7px 0',
        // borderBottom: `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `${scrollAnimation} linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{ color: '#0000FF', fontWeight: 'bold' }}
        >
          {parts[0]}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
        >
          GeM has implemented its latest revenue policy.
        </Typography>
        <Typography
          variant="body1"
          component="span"
          sx={{ color: '#0000FF', fontWeight: 'bold' }}
        >
          {parts[1]}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlashNews;
