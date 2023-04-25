import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import Register from './components/Register'
import Login from './components/Login.js'
import HospitalForm from './components/HospitalForm';
import MainAdmin from './Admin/MainAdmin';
// import Admin from './Admin/Admin';
import HospitalsData from './Admin/HospitalsData';
import RegisterData from './Admin/RegisterData';

function Apps() {
  return (
  
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
 
  <Route path='/Register' element={<Register/>} exact/>
  <Route path='/Login' element={<Login/>} exact/>
  <Route path='/HospitalForm' element={<HospitalForm/>} exact/>
  <Route path='/MainAdmin' element={<MainAdmin/>} exact/>
  {/* <Route path='/Admin' element={<Admin/>} exact/> */}
  <Route path='/RegisterData' element={<RegisterData/>} exact/>
  <Route path='/HospitalsData' element={<HospitalsData/>} exact/>
 
</Routes>
</Router>
    );
}

export default Apps;