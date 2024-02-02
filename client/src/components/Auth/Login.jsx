import React, { useState } from "react";

function Login() {

  const [formData,setFormData]=useState({
    email:'',
    password:''
  });
  const [errors,setErrors]=useState({})

  const handleChange=(e)=>{
    const {name,value} =e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    setErrors({
      ...errors,
      [name]:''
    });
  };
  

  return (
    <>
      <div classNameName="container mx-auto bg-red-300 font-bold">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 m-auto my-8 mt-1/3 md:w-1/4 sm:w-99 lg:1/4" style={{
          marginTop:'10%'
        }} >
          <h1 className="text-center text-xl font-bold mb-6">Login</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
