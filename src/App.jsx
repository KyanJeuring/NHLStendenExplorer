import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import Faq from './pages/faq/Faq'
import LearnMore from './pages/learnMore/LearnMore'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/learnMore" element={<LearnMore/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </main>
    </>
  )
}