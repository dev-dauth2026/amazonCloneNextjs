import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 m-6">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
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
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Log In
        </button>

        <Link
          href="/signup"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Sign Up
        </Link>
      </div>
      <div className="text-center">
        <Link className="text-sm text-gray-600" href="/signup">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
