import React from 'react'
import { Routes, Route , useLocation} from 'react-router-dom'
import Home from './pages/home/Home'
import Faq from './pages/faq/Faq'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'

export default function App() {
  const routesWithNavbar = [
    { path: "/", page: <Home /> },
    { path: "/faq", page: <Faq /> }
  ];

  const routesWithoutNavbar = [
    { path: "/learnMore", page: <LearnMore /> }
  ];

  const location = useLocation();
  const showNavbar = routesWithNavbar.some(r => r.path === location.pathname);

  const routeElements = [];

  for (const r of routesWithNavbar) {
    routeElements.push(<Route key={r.path} path={r.path} element={r.page} />);
  }

  for (const r of routesWithoutNavbar) {
    routeElements.push(<Route key={r.path} path={r.path} element={r.page} />);
  }

  return (
    <>
      {showNavbar && <Navbar />}

      <main>
        <Routes>{routeElements}</Routes>
      </main>
    </>
  );
}