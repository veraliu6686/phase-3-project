import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav';
import MarketMain from './MarketMain'
import Login from './Login'
import ManageListings from './ManageListings'
import Profile from './Profile'

function App() {

  const [user, setUser] = useState({})
  const [listings, setListings] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(()=> {
    fetch("http://localhost:9292/listings")
    .then(r=>r.json())
    .then(setListings)
  }
  ,[])


  return (
  <div >
    <Nav login={login}/>
    <Routes>
      <Route exact path = "/" element = {<MarketMain listings={listings}/>} />
      <Route path = "/login" element = { <Login setUser={setUser} setLogin={setLogin} />} />
      <Route path = "/manage" element = {<ManageListings/>} />
      <Route path = "/profile" element = {<Profile/>} />
    </Routes>
  </div>
  )
}

export default App
