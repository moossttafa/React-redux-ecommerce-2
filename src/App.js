import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import './App.css';
import Header from './components/Navbar/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/contact';
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App"> 
      <Router> 
        <Header />
        <Routes> 
          <Route path="/" exact element={<Home />} /> 
          <Route path="/about"  element={<About />} /> 
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="*" element={<NotFound />}/>   
        </Routes> 
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
