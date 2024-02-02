import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

const exportProcessSteps = [
    {
        title: 'Step 1: Product Selection',
        description: 'Choose the products you want to export from our wide range of options.',
        image: 'https://via.placeholder.com/300.png?text=Step+1',
    },
    {
        title: 'Step 2: Quality Assurance',
        description: 'Our experts ensure the quality of the selected products meets international standards.',
        image: 'https://via.placeholder.com/300.png?text=Step+2',
    },
    {
        title: 'Step 3: Packaging',
        description: 'Careful packaging is done to protect the products during shipping.',
        image: 'https://via.placeholder.com/300.png?text=Step+3',
    },
    {
        title: 'Step 4: Shipping',
        description: 'We handle the logistics and shipping to deliver your products worldwide.',
        image: 'https://via.placeholder.com/300.png?text=Step+4',
    },
];

const ExportProcess = () => {
    return (
        <Box sx={{ bgcolor: '#1E1E1E', py: 8, px: 4 }}>
            <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2, color: 'white' }}>
            PROCESS
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4}}>
                <Box component="span" sx={{ color: 'white' }}>EXPORT </Box>
                <Box component="span" sx={{ color: '#0788ff', px: 1 }}>PROCESS</Box>
            </Typography>
            <Grid container spacing={4}>
                {exportProcessSteps.map((step, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                image={step.image}
                                alt={step.title}
                                sx={{ maxHeight: 200, objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2">
                                    {step.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button variant="contained" color="primary">
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export default ExportProcess;
