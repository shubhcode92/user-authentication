// 



import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registers from './components/Registers';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>    
      <Router>
        {/* Header components */}
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registers />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
