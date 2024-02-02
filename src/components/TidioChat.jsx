import { useEffect } from 'react';

const TidioChat = () => {
  useEffect(() => {
    const tidioScriptUrl = 'https://code.tidio.co/fch3tblybmswp5jatj2gphuw7lri6ifq.js';
    const script = document.createElement('script');
    
    script.src = tidioScriptUrl;
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  
  return null;
};

export default TidioChat;
