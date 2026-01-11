import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'
import Library from './pages/library/Library'
import KennisPoort from './pages/kennisPoort/KennisPoort'
import MyConceptLab from './pages/myConceptLab/MyConceptLab'
import StudentInfo from './pages/studentInfo/StudentInfo'
import Studylandscapelogistics from './pages/studylandscapelogistics/Studylandscapelogistics'
import Studylandscapeit from './pages/studylandscapeit/Studylandscapeit'
import Studylandscapemain from './pages/studylandscapemain/Studylandscapemain'
import Studylandscapepabo from './pages/studylandscapepabo/Studylandscapepabo'
import Studylandscapeengineering from './pages/studylandscapeengineering/Studylandscapeengineering'
import Canteen from './pages/canteen/Canteen' 
import Equipment from './pages/equipment/Equipment' 
import Games from './pages/games/Games'
import Lockers from './pages/lockers/Lockers'
import Studyabroad from './pages/studyabroad/Studyabroad'

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
          <Route path="/library" element={<Library/>}/>
          <Route path="/kennispoort" element={<KennisPoort/>}/>
          <Route path="/myConceptLab" element={<MyConceptLab/>}/>
          <Route path="/studentInfo" element={<StudentInfo/>}/>
          <Route path="/studylandscapelogistics" element={<Studylandscapelogistics/>}/>
          <Route path="/studylandscapeit" element={<Studylandscapeit/>}/>
          <Route path="/studylandscapemain" element={<Studylandscapemain/>}/>
          <Route path="/studylandscapepabo" element={<Studylandscapepabo/>}/>
          <Route path="/studylandscapeengineering" element={<Studylandscapeengineering/>}/>
          <Route path="/canteen" element={<Canteen/>}/>
          <Route path="/equipment" element={<Equipment/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/lockers" element={<Lockers/>}/>
          <Route path="/studyabroad" element={<Studyabroad/>}/>
        </Routes>
      </main>
    </>
  )
}