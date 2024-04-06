import React from 'react'
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Saved from './components/Saved';
import Profile from './components/Profile';
import AddRecipe from './components/AddRecipe';
import Detail from './components/Detail';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<Login />}/>
      <Route  path="/register" element={<Register />}/>
      <Route  path="profile" element={<Profile />}/>
      <Route  path="/saved" element={<Saved />}/>
      <Route  path="/add" element={<AddRecipe />}/>
      <Route  path="/:id" element={<Detail />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App