import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'; // Import social media icons

// Import your images
import IMAGE1 from '../assets/image1.png';
import IMAGE2 from '../assets/image2.png';
import IMAGE3 from '../assets/image3.png';

const images = [IMAGE1, IMAGE2, IMAGE3];

const MainSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [background, setBackground] = useState(images[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Change background image
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5000ms (5 seconds)

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        setBackground(images[index]);
    }, [index]);

    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`, // Add a dark overlay to the background image
                backgroundSize: isMobile ? 'auto 100%' : 'cover', // Adjust background size for mobile
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent background image from repeating
                transition: 'background-image 1s ease-in-out', // Smooth transition between images
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center the content horizontally
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional text shadow for better readability
            }}
        >
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', maxWidth: isMobile ? '85%' : '800px', margin: 'auto' }}> {/* Center the text and adjust width for mobile */}
                        <Typography variant={isMobile ? 'h4' : 'h2'} gutterBottom sx={{ fontWeight: 'bold', marginBottom: isMobile ? 1 : 2 }}>
                            Welcome to Global Dock
                        </Typography>
                        <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom> {/* Adjust font size for mobile */}
                        Exploring Global Tastes - We specialize in exporting premium Indian coffee, exotic spices, and gourmet treasures worldwide. Discover exceptional flavors with us.
                        </Typography>
                        <Link to="/#contact" smooth style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ bgcolor: '#0788ff', '&:hover': { bgcolor: '#0568cc' }, fontSize: isMobile ? '1rem' : '1.2rem', marginTop: '20px' }}>
                                GET IN TOUCH
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        {/* Social Media Icons */}
                        <IconButton color="inherit" href="https://facebook.com" target="_blank"><Facebook /></IconButton>
                        <IconButton color="inherit" href="https://twitter.com" target="_blank"><Twitter /></IconButton>
                        <IconButton color="inherit" href="https://linkedin.com" target="_blank"><LinkedIn /></IconButton>
                        <IconButton color="inherit" href="https://instagram.com" target="_blank"><Instagram /></IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainSection;
