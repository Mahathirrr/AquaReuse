import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { UserCircle, PencilIcon, X } from "lucide-react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
  });
  const [tempAvatar, setTempAvatar] = useState(null);
  const [showImageEditor, setShowImageEditor] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result);
        setShowImageEditor(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveAvatar = () => {
    setProfile((prev) => ({ ...prev, avatar: tempAvatar }));
    setShowImageEditor(false);
  };

  const handleCancelAvatar = () => {
    setTempAvatar(null);
    setShowImageEditor(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            {profile.avatar || tempAvatar ? (
              <img
                src={showImageEditor ? tempAvatar : profile.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <UserCircle className="w-20 h-20 text-gray-400" />
            )}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 p-1.5 bg-blue-500 rounded-full text-white"
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      {showImageEditor && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-4 shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Preview New Photo</h3>
            <button onClick={handleCancelAvatar}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src={tempAvatar}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleCancelAvatar}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAvatar}
              className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Save Photo
            </button>
          </div>
        </motion.div>
      )}

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
