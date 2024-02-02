import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQComponent = () => {
  // Define your FAQ data as an array of objects with questions and answers
  const faqs = [
    {
      question: 'What products do you export?',
      answer: 'We export a wide range of products including coffee, tea, spices, cereals, sugar, granite stone, iron, steel, aluminum, electronic products, toys, wood, and more.',
    },
    {
      question: 'Where do you export your products?',
      answer: 'We export our products worldwide to various countries and regions. Our global distribution network ensures timely delivery to our customers.',
    },
    {
      question: 'How can I place an order?',
      answer: 'To place an order, you can contact our sales team through our website or email. They will guide you through the ordering process and provide all the necessary information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, credit cards, and other secure online payment options. Our sales team will provide you with payment details when you place an order.',
    },
    // Add more FAQ items as needed
  ];

  // State to keep track of the currently expanded FAQ item
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to handle expanding/collapsing FAQ items
  const handleAccordionChange = (index) => {
    if (index === expandedItem) {
      // Collapse the currently expanded item if clicked again
      setExpandedItem(null);
    } else {
      // Expand the clicked item
      setExpandedItem(index);
    }
  };

  return (
    <Box sx={{ bgcolor: '#333333', color: 'white', py: 8, px:4 }}>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
            FAQ
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4}}>
            <Box component="span" sx={{ color: 'white' }}>Frequently Asked </Box>
            <Box component="span" sx={{ color: '#0788ff', px: 1 }}>Questions</Box>
        </Typography>
    <Container >
      {faqs.map((faq, index) => (
        <Accordion
        key={index}
        expanded={expandedItem === index}
        onChange={() => handleAccordionChange(index)}
        sx={{ bgcolor: '#444444', color:'white' }} // Add this sx prop to set the background color
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`faq-content-${index}`}
          id={`faq-header-${index}`}
        >
          <Typography variant="h6">{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
      
      ))}
    </Container>
    </Box>
  );
};

export default FAQComponent;
