import React, { useState } from "react";
import { Trash2 } from "lucide-react"; 

const sampleMedia = [
  { id: 1, name: "Image 1", type: "image", url: "https://via.placeholder.com/150" },
  { id: 2, name: "Video 1", type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, name: "Image 2", type: "image", url: "https://via.placeholder.com/150" },
  { id: 4, name: "Video 2", type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const AllFiles = () => {
  const [media, setMedia] = useState(sampleMedia);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setMedia(media.filter((file) => file.id !== id));
  };

  const filteredMedia = filter === "all" ? media : media.filter((file) => file.type === filter);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Media Gallery</h2>

      <div className="flex space-x-3 mb-4">
        {["all", "image", "video"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded ${
              filter === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(type)}
          >
            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}s
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMedia.length > 0 ? (
          filteredMedia.map((file) => (
            <div key={file.id} className="relative bg-white p-3 rounded shadow-md">
              {file.type === "image" ? (
                <img src={file.url} alt={file.name} className="w-full h-40 object-cover rounded" />
              ) : (
                <video controls src={file.url} className="w-full h-40 rounded" />
              )}
              <p className="mt-2 text-sm text-gray-700">{file.name}</p>

              {/* Delete Icon Button */}
              <button
                onClick={() => handleDelete(file.id)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No media found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFiles;
