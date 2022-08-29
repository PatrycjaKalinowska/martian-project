import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter >
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
