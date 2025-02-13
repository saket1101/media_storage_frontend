import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useAllfilesQuery, useDeletefilesMutation } from "../../redux/apis/MediaApis";
import { toast } from "react-toastify";

const AllFiles = () => {
  const [filter, setFilter] = useState("all");

  const { data: allFiles, isLoading, refetch } = useAllfilesQuery(filter === "all" ? "" : filter);
  const [deleteFile,{isLoading:deleteLoading}] = useDeletefilesMutation();

  useEffect(() => {
    refetch(); 
  }, [filter, refetch]);

  const handleDelete = async (id) => {
    try {
      await deleteFile(id).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete file.");
    }
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Media Gallery</h2>

      <div className="flex space-x-3 mb-4">
        {["all", "image", "video"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded ${
              filter === type ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(type)}
          >
            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}s
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading ? (
          <p className="text-gray-500 text-center col-span-3">Loading...</p>
        ) : allFiles?.data?.length > 0 ? (
          allFiles.data.map((file) => (
            <div key={file._id} className="relative bg-white p-3 rounded shadow-md">
              {file.mediaType === "image" ? (
                <img src={file.mediaUrl} alt="Media" className="w-full h-40 object-cover rounded" />
              ) : (
                <video controls src={file.mediaUrl} className="w-full h-40 rounded" />
              )}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition cursor-pointer"
                onClick={() => handleDelete(file._id)}
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
