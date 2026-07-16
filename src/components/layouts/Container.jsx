import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../../pages/Home";
import CustomerDashboard from "../../pages/CustomerDashboard";
import Login from "../auth/Login";
import RegisterCustomer from "../customers/RegisterCustomer";
import Profile from "../dashboard/Profile";
import UpdateProfile from "../customers/UpdateProfile";

function Container() {
  return (
    <div>
      <h1> TFL Insurance</h1>
      <hr />

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/Login">Login</Link> | 
          <Link to="/RegisterCustomer">Register</Link> 
          
        </nav>
        <hr />

        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/RegisterCustomer" element={<RegisterCustomer />} />

    <Route path="/CustomerDashboard" element={<CustomerDashboard />} />

      <Route path="/Profile" element={<Profile />}/>
      <Route path="/UpdateProfile" element={<UpdateProfile />}/>
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
