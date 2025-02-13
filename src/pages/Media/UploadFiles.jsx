import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile.size > 3 * 1024 * 1024) {
        setError("File size should not exceed 3MB.");
        setFile(null);
        return;
      }
      setError("");
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
  };

  return (
    <div className="flex items-center justify-center h-[84vh] bg-gray-100">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Media</h2>

        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            id="fileInput"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer block text-purple-600 font-medium"
          >
            Click to Upload or Drag & Drop
          </label>
          {file && (
            <p className="mt-2 text-sm text-gray-700">{file.name}</p>
          )}
        </div>

        {file && (
          <div className="mt-4">
            {file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-40 object-cover rounded"
              />
            ) : file.type.startsWith("video/") ? (
              <video
                controls
                src={URL.createObjectURL(file)}
                className="w-full h-40 rounded"
              />
            ) : null}
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
