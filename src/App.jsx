import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'
import Studylandscapelogistics from './pages/studylandscapelogistics/Studylandscapelogistics'
import Studylandscapeit from './pages/studylandscapeit/Studylandscapeit'
import Studylandscapemain from './pages/studylandscapemain/Studylandscapemain'
import Studylandscapepabo from './pages/studylandscapepabo/Studylandscapepabo'
import Studylandscapeengineering from './pages/studylandscapeengineering/Studylandscapeengineering'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/learnMore" element={<LearnMore/>}/>
          <Route path="/studylandscapelogistics" element={<Studylandscapelogistics/>}/>
          <Route path="/studylandscapeit" element={<Studylandscapeit/>}/>
          <Route path="/studylandscapemain" element={<Studylandscapemain/>}/>
          <Route path="/studylandscapepabo" element={<Studylandscapepabo/>}/>
          <Route path="/studylandscapeengineering" element={<Studylandscapeengineering/>}/>
        </Routes>
      </main>
    </>
  )
}