import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Destination from './pages/destination/Destination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='/destination' element={<Destination />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
