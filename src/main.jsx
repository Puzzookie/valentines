import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Levels from './Pages/Levels.jsx'
import Level from "./Pages/Level.jsx"
import NoMatch from "./Pages/NoMatch.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Levels />} />
        <Route path="/:level" element={<Level />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
