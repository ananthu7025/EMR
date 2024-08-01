import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import Appointments from './Pages/Appointments';
import Patients from './Pages/Patients';
import AddPatients from './Pages/Patients/AddPatients';
import Dashboard from './Pages/Dashboard';
import Calendar from './Pages/Calendar';
import './App.css'
export default function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/add-patient" element={<AddPatients />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
