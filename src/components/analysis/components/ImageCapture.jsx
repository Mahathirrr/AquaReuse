import React from "react";
import { CameraIcon, PhotoIcon } from "@heroicons/react/24/solid";

export default function ImageCapture({
  onCapture,
  onFileSelect,
  fileInputRef,
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={onCapture}
        className="bg-blue-500 text-white p-6 rounded-xl flex flex-col items-center justify-center space-y-2"
      >
        <CameraIcon className="h-8 w-8" />
        <span className="text-sm font-medium">Take Photo</span>
        <span className="text-xs text-blue-100">Quick capture</span>
      </button>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-gray-100 text-gray-700 p-6 rounded-xl flex flex-col items-center justify-center space-y-2"
      >
        <PhotoIcon className="h-8 w-8" />
        <span className="text-sm font-medium">Upload Image</span>
        <span className="text-xs text-gray-500">From gallery</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
