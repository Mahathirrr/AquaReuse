import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

export default function AuthScreen() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Choose how you want to continue
        </p>
        <div className="w-full space-y-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-3"
          >
            <LogIn className="w-5 h-5" />
            <span>Sign In</span>
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full bg-white border-2 border-blue-500 text-blue-500 py-4 rounded-xl font-medium flex items-center justify-center space-x-3"
          >
            <UserPlus className="w-5 h-5" />
            <span>Create Account</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
