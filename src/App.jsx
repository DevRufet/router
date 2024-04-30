import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Pages/Home/Main/Main';
import MainLayout from './components/Pages/Home/MainLayout/MainLayout';
import LogOut from './components/Pages/Home/LogOut/LogOut';
import AddEmployess from './components/Pages/Home/Add Employess/Addemployess'
import Employess from './components/Pages/Home/Employess/Employess'
function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='Main' element={<Main />} />
          <Route path="Employess" element={<Employess />} />
          <Route path="Addemployess" element={<AddEmployess />} />
          <Route path="LogOut" element={<LogOut />} />
        </Route>
        

        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App  