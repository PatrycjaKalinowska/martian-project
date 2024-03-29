import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Apod from './pages/Apod/Apod';



function App() {

  return (
    <HashRouter >
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/apod" element={<Apod />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
