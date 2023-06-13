
import React from 'react';
// import './main.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

// Import des routes
import Home from './Pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
