import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Dialog, DialogContent } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

const products = [
  {
    title: 'Coffee',
    description: 'Description of Coffee.',
    image: 'https://via.placeholder.com/300.png?text=Coffee',
    details: 'Details about Coffee.',
    link: 'https://example.com/coffee',
  },
  {
    title: 'Tea',
    description: 'Description of Tea.',
    image: 'https://via.placeholder.com/300.png?text=Tea',
    details: 'Details about Tea.',
    link: 'https://example.com/tea',
  },
  {
    title: 'Spices',
    description: 'Description of Spices.',
    image: 'https://via.placeholder.com/300.png?text=Spices',
    details: 'Details about Spices.',
    link: 'https://example.com/spices',
  },
  {
    title: 'Cereals',
    description: 'Description of Cereals.',
    image: 'https://via.placeholder.com/300.png?text=Cereals',
    details: 'Details about Cereals.',
    link: 'https://example.com/cereals',
  },
  
  // Add more products as needed
];

const ProductDetailDialog = ({ product, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent sx={{ minHeight: '60vh', position: 'relative', overflow: 'hidden' }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}>
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {product.details}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} href={product.link} target="_blank" rel="noopener noreferrer">
              Visit Product Page
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ bgcolor: '#1E1E1E', color: 'white', py: 8, px: 4 }}>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
        OUR PRODUCTS
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4 }}>
        <Box component="span" sx={{ color: 'white' }}>EXPLORE OUR </Box>
        <Box component="span" sx={{ color: '#0788ff', px: 1 }}>PRODUCTS</Box>
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ bgcolor: 'white', height: '100%' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ maxHeight: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ justifyContent: 'flex-end', pr: 2 }}>
                <Button
                  size="small"
                  onClick={() => handleOpenDialog(product)}
                  sx={{
                    borderRadius: '50%',
                    minWidth: '48px',
                    height: '48px',
                    backgroundColor: '#098af6',
                    color: 'white',
                    border: '2px solid black',
                    '&:hover': {
                      backgroundColor: '#062c4c',
                    }
                  }}
                >
                  <ArrowForwardIosIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          open={openDialog}
          onClose={handleCloseDialog}
        />
      )}
    </Box>
  );
};

export default Product;
