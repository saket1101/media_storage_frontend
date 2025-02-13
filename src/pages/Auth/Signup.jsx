import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../redux/apis/UserApis";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // rtk querry api callig
  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData).unwrap();
      toast.success("User registered successfully");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100 p-4">
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Media Store Web
        </h1>
        <p className="mt-4 text-gray-600">
          Join us today and start exploring our amazing media collection.
        </p>
      </div>

      <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <button className="w-full bg-purple-500 text-white p-2 rounded mt-4 hover:bg-purple-700">
            {isLoading ? "Loading.." : "Sign Up"}{" "}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
