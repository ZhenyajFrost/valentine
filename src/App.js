import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import YesOne from './pages/YesOne';
import YesTwo from './pages/YesTwo';
import YesThree from './pages/YesThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/valentine" element={<Home />} />
        <Route path="/yesone" element={<YesOne />} />
        <Route path="/yestwo" element={<YesTwo />} />
        <Route path="/yesthree" element={<YesThree />} />

      </Routes>
    </Router>
  );
}

export default App;
