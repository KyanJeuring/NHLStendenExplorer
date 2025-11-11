import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Page1 from './pages/page1/Page1'
import Navbar from './components/navbar/Navbar'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page1" element={<Page1/>}/>
        </Routes>
      </main>
    </>
  )
}
