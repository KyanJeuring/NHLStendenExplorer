import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'
import Translate from './pages/translate/Translate'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/learnMore" element={<LearnMore/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/translate" element={<Translate/>}/>
        </Routes>
      </main>
    </>
  )
}