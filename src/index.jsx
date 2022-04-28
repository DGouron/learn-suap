import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.css';
import Home from './pages/Home/index';
import Survey from './pages/Survey';
import Header from './components/Header/index';
import Error from './components/Error/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>
);
