import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entry from './components/Entry';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry/>}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
