import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const ActionMenu = () => {
  const handleAction = (url, isWhatsApp = false) => {
    if (isWhatsApp) {
      window.open(`https://wa.me/919008156702?text=${encodeURIComponent("Hi, I'm interested in discussing a potential opportunity with you.")}`, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
      <Fab
        mainButtonStyles={{ backgroundColor: '#25D366' }}
        position={{ bottom: 20, right: 20 }}
        icon={<ChatIcon style={{ color: 'white' }} />}
      >
     <Action
        style={{ backgroundColor: '#25D366' }}
        text="WhatsApp"
        onClick={() => handleAction('YourWhatsAppLinkHere', true)}
      >
        <WhatsAppIcon style={{ color: 'white' }} />
      </Action>
      <Action
        style={{ backgroundColor: '#0e76a8' }}
        text="LinkedIn"
        onClick={() => handleAction('https://in.linkedin.com/in/hrshrayank')}
      >
        <LinkedInIcon style={{ color: 'white' }} />
      </Action>
      <Action
        style={{ backgroundColor: '#c71610' }}
        text="Email"
        onClick={() => handleAction('mailto:hrshrayank77@gmail.com')}
      >
        <EmailIcon style={{ color: 'white' }} />
      </Action>
    </Fab>
  );
};

export default ActionMenu;