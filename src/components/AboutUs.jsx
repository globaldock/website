import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import AboutLogo from '../assets/about.png'

const AboutUs = () => {
    return (
        <Box sx={{ bgcolor: '#333333', color: 'white', py: 8, px: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            // borderRadius: '50%',
                            width: '100%',
                            // maxWidth: 300,
                            height: 'auto',
                        }}
                        alt="Global Dock"
                        src={AboutLogo} // Replace with your company's image URL
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#0788ff' }}>
                        ABOUT US
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ color: 'white', mb: 4 }}>
                        Your Trusted Export Partner
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At Global Dock, we take pride in being your leading exporter of the finest Indian coffee, aromatic spices, and a diverse range of premium products. With a rich heritage and a commitment to excellence, we bring the flavors and quality of India to your doorstep.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our journey is fueled by a passion for quality, a dedication to sourcing the best, and a promise to deliver the exceptional. We are more than exporters; we are your gateway to the treasures of India.
                    </Typography>
                    
                    <Button 
                        variant="contained" 
                        sx={{ bgcolor: '#0788ff', mt: 4 }}
                        href="#contact" // Replace with the actual link to your contact section
                    >
                        Contact Us
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUs;
