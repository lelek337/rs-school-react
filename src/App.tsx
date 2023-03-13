import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutUs, ErrorPage, MainPage } from './components/pages';

import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/error' element={<ErrorPage/>}/>
            <Route path='/us' element={<AboutUs/>}/>
            <Route></Route>
          </Routes>
        </div>
    </Router>
  )
}

export default App
