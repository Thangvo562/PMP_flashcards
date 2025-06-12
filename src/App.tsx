import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Study from './pages/Study';

const Quiz = () => <div style={{textAlign: 'center', marginTop: '4rem'}}><h2>Quiz Mode Page (Coming Soon)</h2></div>;
const Stats = () => <div style={{textAlign: 'center', marginTop: '4rem'}}><h2>Statistics Page (Coming Soon)</h2></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
