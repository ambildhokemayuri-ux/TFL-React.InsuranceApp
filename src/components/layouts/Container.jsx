
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../auth/Login';
import Register from '../customers/RegisterCustomer';

function Container() {
  return (
    <div>
      <h1> TFL Insurance</h1>
      <hr />

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/Login">Login</Link> | 
          <Link to="/Register">Register</Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
