import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'
import Test from './pages/360test/Test'
import Equipment from './pages/equipment/Equipment'
import Canteen from './pages/canteen/Canteen'
import Library from './pages/library/Library'
import KennisPoort from './pages/kennisPoort/KennisPoort'
import MyConceptLab from './pages/myConceptLab/MyConceptLab'
import StudentInfo from './pages/studentInfo/StudentInfo'
import Studylandscapelogistics from './pages/studylandscapelogistics/Studylandscapelogistics'
import Studylandscapeit from './pages/studylandscapeit/Studylandscapeit'
import Studylandscapemain from './pages/studylandscapemain/Studylandscapemain'
import Studylandscapepabo from './pages/studylandscapepabo/Studylandscapepabo'
import Studylandscapeengineering from './pages/studylandscapeengineering/Studylandscapeengineering'
import Games from './pages/games/Games'
import Lockers from './pages/lockers/Lockers'
import Studyabroad from './pages/studyabroad/Studyabroad'
import Parking from './pages/parking/Parking'
import Footer from './components/footer/Footer'

export default function App() {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "nl" : "en"));

  return (
    <>
      <Navbar lang={lang} toggleLang={toggleLang}/>
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/faq" element={<Faq lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/learnMore" element={<LearnMore lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/explore" element={<Explore lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/library" element={<Library lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/kennispoort" element={<KennisPoort lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/myConceptLab" element={<MyConceptLab lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studentInfo" element={<StudentInfo lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studylandscapelogistics" element={<Studylandscapelogistics lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studylandscapeit" element={<Studylandscapeit lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studylandscapemain" element={<Studylandscapemain lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studylandscapepabo" element={<Studylandscapepabo lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studylandscapeengineering" element={<Studylandscapeengineering lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/canteen" element={<Canteen lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/equipment" element={<Equipment lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/games" element={<Games lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/lockers" element={<Lockers lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/studyabroad" element={<Studyabroad lang={lang} toggleLang={toggleLang}/>}/>
          <Route path="/parking" element={<Parking lang={lang} toggleLang={toggleLang}/>}/>
        </Routes>
      </main>
      <Footer lang={lang} toggleLang={toggleLang} />
    </>
  );
}
