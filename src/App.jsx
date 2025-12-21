import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'

import Canteen from './pages/canteen/Canteen'
import Kennispoort from './pages/kennispoort/Kennispoort'
import Library from './pages/library/Library'
import StudentInfo from './pages/studentInfo/studentinfo'
import MyConceptLab from './pages/myConceptLab/MyConceptLab'
import Lockers from './pages/lockers/Lockers'
import Studylandscapelogistics from './pages/studylandscapelogistics/Studylandscapelogistics'
import Studylandscapeit from './pages/studylandscapeit/Studylandscapeit'

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
          <Route path="/canteen" element={<Canteen/>}/>
          <Route path="/kennispoort" element={<Kennispoort/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/student-info" element={<StudentInfo/>}/>
          <Route path="/myConceptLab" element={<MyConceptLab/>}/>
          <Route path="/lockers" element={<Lockers/>}/>
          <Route path="/studylandscapelogistics" element={<Studylandscapelogistics/>}/>
          <Route path="/studylandscapeit" element={<Studylandscapeit/>}/>
        </Routes>
      </main>
    </>
  )
}