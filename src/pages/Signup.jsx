import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const baseUrl = "http://localhost:10000";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `${baseUrl}/api/auth/signup`,
        formData
      );
      console.log(res.data);
      if (!res.data.success) {
        setError(res.data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during signup."
      );
      setLoading(false);
    }
  };


  return (
    <div className="p-3 max-w-lg mx-auto min-h-screen">
      <h1 className="text-3xl text-center font-semibold my-7 p-3 max-w-lg mx-auto">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-5 text-center flex gap-2 hover:underline">
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
}
