// Skills.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const skills = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Chart.js', logo: 'https://www.chartjs.org/media/logo-title.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const Skills = () => {
    return (
        <Box sx={{ bgcolor: '#051e37', color: 'white', p: 4 }}>
            <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
                SKILLS
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4}}>
                <Box component="span" sx={{ color: 'white' }}>MY</Box>
                <Box component="span" sx={{ color: '#0788ff', px: 1 }}>SKILLS</Box>
            </Typography>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
                        <Box component="img" src={skill.logo} alt={skill.name} sx={{ height: '100px', mb: 1 }} />
                        <Typography variant="subtitle1">{skill.name}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
