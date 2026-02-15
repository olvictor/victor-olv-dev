import './App.css'
import { useState, useEffect } from 'react'

import { Routes, Route , useLocation } from 'react-router-dom'
import BlogPost from './pages/BlogPost.jsx' 
import Home from './pages/Home.jsx'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <>
    

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}
export default App
