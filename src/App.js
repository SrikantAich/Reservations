import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './screens/Login.js';
import Details from './screens/Details.js'
import Reservations from './screens/Reservations.js';
import Adventure from './screens/Adventure.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
   <>
   {/* <Login></Login>
   <Reservations></Reservations>
   <Details></Details> */}

    
   <BrowserRouter>
   <Navbar/>
  
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/adventures" element={<Adventure />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

