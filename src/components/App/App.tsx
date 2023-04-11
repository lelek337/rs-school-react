import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, ErrorPage, MainPage } from '../pages';
import Header from '../header/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
