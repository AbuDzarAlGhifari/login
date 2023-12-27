import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <p className="text-center text-xs">{msg}</p>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={Auth}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            type="submit">
            Login
          </button>
          <button
            className="bg-blue-500 text-white mt-4  p-2 rounded w-full hover:bg-blue-600"
            type="submit"
            onClick={() => navigate("/req")}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
