import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../appSlice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const userName = "admin";
  const password = "admin";
  const handleLogin = (e) => {
    e.preventDefault();

    if (userLogin.username === userName && userLogin.password === password) {
      const authToken = "athuTokenset@123";
      const profileData = {
        username: userLogin.username, 
        email: '',                     
        mobile: '',                    
        address: '',                   
        dob: '',                       
        zipCode: '',                  
        gender: '',                    
    };
       const test = dispatch(login({ user: userLogin.username, token: authToken ,profile :profileData }));
      localStorage.setItem(
        "user",
        JSON.stringify({ userName: userLogin.username, authToken })
      );
      localStorage.setItem("profile", JSON.stringify(profileData));
      console.log(test);

      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Sign In
        </h2>
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="username"
                type="text"
                onChange={handleChange}
                value={userLogin.username}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm p-1"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={userLogin.password}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm p-1"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
