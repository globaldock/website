// Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png'; // Update with your logo

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (section) => {
      setActiveSection(section);
      setMobileOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/#home' },
    { title: 'Products', path: '/#products' },
    { title: 'About Us', path: '/#aboutus' },
    { title: 'Export Process', path: '/#exportprocess' },
    { title: 'FAQ', path: '/#faq' },
    { title: 'Contact', path: '/#contact' },
  ];

  const drawer = (
    <List>
      {navLinks.map((item, index) => (
        <ListItem button key={index} onClick={handleDrawerToggle}>
          <HashLink smooth to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <ListItemText primary={item.title} />
          </HashLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" style={{ background: '#424242', boxShadow: 'none' }}> {/* Update background color to match your branding */}
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <HashLink smooth to="/#home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={Logo} alt="GlobalDock Logo" style={{ maxHeight: '64px' }} /> {/* Update with your logo */}
            </HashLink>
            <div style={{ display: 'flex', gap: '8px' }}> {/* Adjust gap between buttons */}
              {navLinks.map((item, index) => (
                <Button 
                  color="inherit" 
                  key={index} 
                  component={HashLink} 
                  to={item.path} 
                  smooth 
                  onClick={() => handleNavigation(item.title)}
                  sx={{
                    borderBottom: activeSection === item.title ? '3px solid white' : 'none',
                    transition: 'border-bottom 0.3s',
                    padding: '6px 8px', // Adjust button padding if needed
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
