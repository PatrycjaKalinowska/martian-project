import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Content from './pages/Content/Content';
import Weather from './pages/Weather/Weather';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
