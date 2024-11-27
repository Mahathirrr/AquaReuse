import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/auth/SplashScreen";
import AuthScreen from "./components/auth/AuthScreen";
import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/RegisterScreen";
import Dashboard from "./components/Dashboard";
import WaterAnalysis from "./components/WaterAnalysis";
import History from "./components/History";
import Guide from "./components/Guide";
import Settings from "./components/Settings";
import RewardsScreen from "./components/rewards/RewardsScreen";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto h-screen flex flex-col">
          <main className="flex-1 overflow-y-auto pb-16">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/auth" element={<AuthScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analysis" element={<WaterAnalysis />} />
              <Route path="/history" element={<History />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/rewards" element={<RewardsScreen />} />
            </Routes>
          </main>
          <Routes>
            {[
              "/dashboard",
              "/analysis",
              "/history",
              "/rewards",
              "/settings",
            ].map((path) => (
              <Route key={path} path={path} element={<BottomNav />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
