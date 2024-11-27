import React from "react";
import { motion } from "framer-motion";
import { UserCircle, PencilIcon } from "lucide-react";

export default function ProfileSettings() {
  const [profile, setProfile] = React.useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
  });

  const handleUpdateProfile = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <UserCircle className="w-20 h-20 text-gray-400" />
          )}
          <button className="absolute bottom-0 right-0 p-1 bg-blue-500 rounded-full text-white">
            <PencilIcon className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleUpdateProfile("name", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => handleUpdateProfile("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Save Changes
        </button>
      </div>
    </motion.div>
  );
}
