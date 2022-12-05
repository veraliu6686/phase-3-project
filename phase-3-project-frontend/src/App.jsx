import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav';
import MarketMain from './MarketMain'
import Login from './Login'
import ManageListings from './ManageListings'
import Profile from './Profile'

function App() {


  return (
  <div >
    <Nav/>
    <Routes>
      <Route exact path = "/" element = {<MarketMain />} />
      <Route path = "/login" element = { <Login />} />
      <Route path = "/manage" element = {<ManageListings/>} />
      <Route path = "/profile" element = {<Profile/>} />
    </Routes>
  </div>
  )
}

export default App
