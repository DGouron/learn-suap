import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import './styles/index.css';
import Home from './pages/Home/index';
import Survey from './pages/Survey';
import Header from './components/Header/index';
import Error from './components/Error/index';
import Footer from './components/Footer/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </StrictMode>
  </Provider>
);
