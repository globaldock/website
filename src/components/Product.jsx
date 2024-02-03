import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Dialog, DialogContent, IconButton, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CofeeLogo from '../assets/coffee.png'

// Define categories and products
const categories = ['All', 'Beverages', 'Metals', 'Textiles', 'Handicrafts', 'Agri Products', 'Leather Goods'];
const products = [
  // Beverages
  { title: 'Assam Tea', category: 'Beverages', description: 'Rich black tea from the Assam region of India.', image: 'https://via.placeholder.com/300.png?text=Assam+Tea', details: 'Details about Assam Tea.', link: 'https://example.com/assam-tea' },
  { title: 'Darjeeling Tea', category: 'Beverages', description: 'Aromatic and flavorful tea from the Darjeeling district.', image: 'https://via.placeholder.com/300.png?text=Darjeeling+Tea', details: 'Details about Darjeeling Tea.', link: 'https://example.com/darjeeling-tea' },
  
  // Metals
  { title: 'Indian Aluminum', category: 'Metals', description: 'High-quality aluminum, suitable for various industrial uses.', image: 'https://via.placeholder.com/300.png?text=Indian+Aluminum', details: 'Details about Indian Aluminum.', link: 'https://example.com/indian-aluminum' },
  { title: 'Indian Steel', category: 'Metals', description: 'Durable and versatile Indian steel.', image: 'https://via.placeholder.com/300.png?text=Indian+Steel', details: 'Details about Indian Steel.', link: 'https://example.com/indian-steel' },
  
  // Textiles
  { title: 'Cotton Fabrics', category: 'Textiles', description: 'High-quality cotton fabrics, known for durability and comfort.', image: 'https://via.placeholder.com/300.png?text=Cotton+Fabrics', details: 'Details about Cotton Fabrics.', link: 'https://example.com/cotton-fabrics' },
  { title: 'Silk Sarees', category: 'Textiles', description: 'Elegant and luxurious Indian silk sarees.', image: 'https://via.placeholder.com/300.png?text=Silk+Sarees', details: 'Details about Silk Sarees.', link: 'https://example.com/silk-sarees' },
  
  // Handicrafts
  { title: 'Marble Inlay Work', category: 'Handicrafts', description: 'Exquisite marble inlay work from skilled artisans.', image: 'https://via.placeholder.com/300.png?text=Marble+Inlay+Work', details: 'Details about Marble Inlay Work.', link: 'https://example.com/marble-inlay-work' },
  { title: 'Wooden Handicrafts', category: 'Handicrafts', description: 'Beautifully carved wooden handicrafts.', image: 'https://via.placeholder.com/300.png?text=Wooden+Handicrafts', details: 'Details about Wooden Handicrafts.', link: 'https://example.com/wooden-handicrafts' },
  
  // Agri Products
  { title: 'Cofee', category: 'Agri Products', description: 'A variety of rich and flavorful Indian spices.', image: CofeeLogo, details: 'Details about Spices.', link: 'https://example.com/spices' },
  { title: 'Basmati Rice', category: 'Agri Products', description: 'Aromatic and long-grain Basmati rice.', image: 'https://via.placeholder.com/300.png?text=Basmati+Rice', details: 'Details about Basmati Rice.', link: 'https://example.com/basmati-rice' },
  { title: 'Spices', category: 'Agri Products', description: 'A variety of rich and flavorful Indian spices.', image: 'https://via.placeholder.com/300.png?text=Spices', details: 'Details about Spices.', link: 'https://example.com/spices' },
  
  // Leather Goods
  { title: 'Leather Bags', category: 'Leather Goods', description: 'Premium quality leather bags crafted for style and durability.', image: 'https://via.placeholder.com/300.png?text=Leather+Bags', details: 'Details about Leather Bags.', link: 'https://example.com/leather-bags' },
  { title: 'Leather Footwear', category: 'Leather Goods', description: 'Comfortable and stylish leather footwear.', image: 'https://via.placeholder.com/300.png?text=Leather+Footwear', details: 'Details about Leather Footwear.', link: 'https://example.com/leather-footwear' },
  // ... add more products to make 15
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <Box sx={{ bgcolor: '#1E1E1E', color: 'white', py: 8, px: 4 }}>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
        OUR PRODUCTS
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 4 }}>
        <Typography variant="h3" sx={{ color: 'white' }}>
          <Box component="span" sx={{ color: 'white' }}>EXPLORE OUR </Box>
          <Box component="span" sx={{ color: '#0788ff', px: 1 }}>PRODUCTS</Box>
        </Typography>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ bgcolor: 'white', color: '#1E1E1E' }}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <Box sx={{
          display: 'flex',
          overflowX: 'scroll',
          scrollbarWidth: 'none',  /* For Firefox */
          msOverflowStyle: 'none',  /* For Internet Explorer and Edge */
          '&::-webkit-scrollbar': { /* For WebKit browsers */
            display: 'none'
          }
        }}>
          {filteredProducts.map((product, index) => (
            <Box key={index} sx={{ minWidth: 240, maxWidth: 240, flexGrow: 0, flexShrink: 0, p: 1 }}>
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
            </Box>
          ))}
        </Box>
      </Box>
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
