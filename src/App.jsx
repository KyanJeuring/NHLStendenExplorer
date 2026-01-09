import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Faq from "./pages/faq/Faq";
import Navbar from "./components/navbar/Navbar";
import LearnMore from "./pages/learnMore/LearnMore";
import Translate from "./pages/translate/Translate";

export default function App() {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "nl" : "en"));

  return (
    <>
      <Navbar lang={lang} toggleLang={toggleLang} />

      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} toggleLang={toggleLang} />} />
          <Route path="/faq" element={<Faq lang={lang} toggleLang={toggleLang} />} />
          <Route path="/learnMore" element={<LearnMore />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </main>
    </>
  );
}
