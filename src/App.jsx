
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import ActionMenu from './components/ActionMenu';
import './App.css'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import ExportProcess from './components/ExportProcess';
import FAQComponent from './components/FAQComponent';

function App() {
  return (
    <>
    <Navbar />
    <section id="home"><MainSection /></section>
    <section id="products"><Product /></section>
    <section id="aboutus"><AboutUs /></section>
    <section id="exportprocess"><ExportProcess /></section>
    <section id="faq"><FAQComponent /></section>
    <section id="contact"><ContactUs /></section>
    <Footer />
    <ActionMenu /> 
    </>
  );
}

export default App;
