import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './../Dash/Sidebar';
import Board from './../Dash/Board';
import Profile from './../Dash/Profile';
import Company from './../Dash/Company';
import WebcamScanner from './../Dash/WebcamScanner';


const Dashboard = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route index element={<Board/>}/>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='Company' element={<Company/>}/>
        <Route path='WebcamScanner' element={<WebcamScanner/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Dashboard
