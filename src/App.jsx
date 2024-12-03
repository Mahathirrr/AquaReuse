import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/auth/SplashScreen";
import AuthScreen from "./components/auth/AuthScreen";
import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/RegisterScreen";
import ProfessionalRegisterScreen from "./components/auth/ProfessionalRegisterScreen";
import WelcomeGuide from "./components/onboarding/WelcomeGuide";
import Dashboard from "./components/Dashboard";
import WaterAnalysis from "./components/WaterAnalysis";
import EnhancedHistory from "./components/statistics/EnhancedHistory";
import Guide from "./components/Guide";
import Settings from "./components/Settings";
import RewardsScreen from "./components/rewards/RewardsScreen";
import BottomNav from "./components/BottomNav";
import ProfessionalBottomNav from "./components/professional/ProfessionalBottomNav";
import HealthDashboard from "./components/professional/HealthDashboard";
import ChemicalDashboard from "./components/professional/ChemicalDashboard";
import WaterQualityReport from "./components/professional/WaterQualityReport";
import ResearchDashboard from "./components/professional/ResearchDashboard";
import { USER_ROLES } from "./constants/userRoles";

function App() {
  // This would come from your auth context/state management
  const userRole = USER_ROLES.CHEMICAL_EXPERT;

  const isProfessionalUser = [
    USER_ROLES.HEALTH_OFFICIAL,
    USER_ROLES.CHEMICAL_EXPERT,
  ].includes(userRole);

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
              <Route
                path="/register-professional"
                element={<ProfessionalRegisterScreen />}
              />
              <Route path="/welcome" element={<WelcomeGuide />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analysis" element={<WaterAnalysis />} />
              <Route path="/history" element={<EnhancedHistory />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/rewards" element={<RewardsScreen />} />
              <Route path="/health-dashboard" element={<HealthDashboard />} />
              <Route
                path="/chemical-dashboard"
                element={<ChemicalDashboard />}
              />
              <Route
                path="/water-quality-report"
                element={<WaterQualityReport />}
              />
              <Route
                path="/research-dashboard"
                element={<ResearchDashboard />}
              />
            </Routes>
          </main>
          <Routes>
            {isProfessionalUser ? (
              <Route
                path="*"
                element={<ProfessionalBottomNav userRole={userRole} />}
              />
            ) : (
              [
                "/dashboard",
                "/analysis",
                "/history",
                "/rewards",
                "/settings",
              ].map((path) => (
                <Route key={path} path={path} element={<BottomNav />} />
              ))
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
