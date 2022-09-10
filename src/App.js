import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <HashRouter >
      <div className="container">
        <Header />
        <Routes>
          <Route path="/martian-project" element={<Home />}></Route>
          <Route path="/martian-project/news" element={<News />}></Route>
          <Route path="/martian-project/gallery" element={<Gallery />}></Route>
        </Routes>        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
