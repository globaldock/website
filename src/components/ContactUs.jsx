// ContactMe.jsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, IconButton, Link, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xjvnyvrg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                setSnackbarMessage('Form successfully submitted');
                setSnackbarSeverity('success');
                // Clear the form
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setSnackbarMessage('An error occurred');
                setSnackbarSeverity('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSnackbarMessage('An error occurred');
            setSnackbarSeverity('error');
        }
        setOpenSnackbar(true);
    };

    const textFieldStyles = {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            backgroundColor: '#576c7b',
        },
    };

    const openPopupWidget = () => {
        const link = 'https://calendly.com/hrshrayank77/career-opportunities-with-shrayank';
        window.open(link, 'Calendly', 'width=800,height=600');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ bgcolor: '#1E1E1E', color: 'white', py: 8, px:4 }}>
            <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
                CONTACT
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4}}>
                <Box component="span" sx={{ color: 'white' }}>CONTACT </Box>
                <Box component="span" sx={{ color: '#0788ff', px: 1 }}>US</Box>
            </Typography>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ bgcolor: '#2A2A2A', p: 4, borderRadius: '16px' }}>
                    <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                startIcon={<EventAvailableIcon />}
                                onClick={openPopupWidget} // Open Calendly in a new window
                                sx={{ 
                                    mb: 2,
                                    backgroundColor: '#0788ff', 
                                    '&:hover': { backgroundColor: '#0568cc' } 
                                }}
                            >
                                Schedule a Meeting
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', '& > *': { m: 1 } }}>
                                
                                <Link href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
                                    <IconButton aria-label="twitter" sx={{ color: 'white' }}>
                                        <TwitterIcon />
                                    </IconButton>
                                </Link>

                                <Link href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
                                    <IconButton aria-label="github" sx={{ color: 'white' }}>
                                        <GitHubIcon />
                                    </IconButton>
                                </Link>

                                <Link href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
                                    <IconButton aria-label="linkedin" sx={{ color: 'white' }}>
                                        <LinkedInIcon />
                                    </IconButton>
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                <EmailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                <Typography variant="subtitle1">support@globaldock.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                                <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                <Typography variant="subtitle1">+91 9999999999</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Your Name" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleInputChange} 
                                    sx={textFieldStyles} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Your Email" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    type="email" 
                                    name="email" 
                                    value={form.email} 
                                    onChange={handleInputChange} 
                                    sx={textFieldStyles} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    label="Subject" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    name="subject" 
                                    value={form.subject} 
                                    onChange={handleInputChange} 
                                    sx={textFieldStyles} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    label="Your Message" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    multiline 
                                    rows={4} 
                                    name="message" 
                                    value={form.message} 
                                    onChange={handleInputChange} 
                                    sx={textFieldStyles} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth 
                                    sx={{ backgroundColor: 'white', color: '#051b30', '&:hover': { backgroundColor: 'white', opacity: '0.8' } }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                    </Grid>
                </Grid>
            </Container>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
    
};

export default ContactUs;
