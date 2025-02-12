import React, { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleUpload = () => {
    if (files.length === 0) return alert("Please select a file to upload");
    console.log("Uploading", files);
    // API call to upload files
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Media Management</h2>

        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="w-full border p-2 rounded mb-4"
        />

        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                >
                  ×
                </button>
                <img src={url} alt="preview" className="w-full h-32 object-cover rounded" />
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Upload Media
        </button>
      </div>
    </div>
  );
};

export default Upload;
