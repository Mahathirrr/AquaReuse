import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WaterAnalysis from './components/WaterAnalysis';
import History from './components/History';
import Guide from './components/Guide';
import Settings from './components/Settings';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto h-screen flex flex-col">
          <main className="flex-1 overflow-y-auto pb-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<WaterAnalysis />} />
              <Route path="/history" element={<History />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

export default App;