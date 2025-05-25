import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <div className="app">
    <div className="floating-element"></div>
    <div className="floating-element"></div>
    <header className="app-header">
      <h1>Кіноафіша</h1>
      <p>Відкрийте для себе найкращі кіноновинки цього сезону</p>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </main>
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Кіноафіша Premium</p>
    </footer>
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
);

export default App;