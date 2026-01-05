"use client";

import { useState } from "react";

const Form = () => {
  const [isNewUser, setNewUser] = useState(false);

  // form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (isNewUser && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <div className="mt-4 w-75">
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* email */}
          <div>
            <legend className="text-sm text-gray-500">Email Address</legend>
            <input
              className="ring ring-gray-600 px-3 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-fuchsia-600"
              name="email"
              type="email"
              placeholder="User@mail.com"
              required
            />
          </div>

          {/* password */}
          <div className="mt-4  ">
            <legend className="text-sm text-gray-500">Password</legend>
            <input
              className="ring ring-gray-600 px-3 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-fuchsia-600"
              name="password"
              type="text"
              placeholder="••••••••"
              required
            />
          </div>

          {/* confirm password */}
          {isNewUser && (
            <div className="mt-4">
              <legend className="text-sm text-gray-500">
                Confirm Password
              </legend>
              <input
                className="ring ring-gray-600 px-3 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-fuchsia-600"
                name="confirmPassword"
                type="text"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          {/* form btn */}
          <button className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2 px-4 rounded-md w-full transition-colors">
            {isNewUser ? "Sign Up" : "Sign In"}
          </button>
        </fieldset>
      </form>

      {/* new user  check*/}
      <div
        className="cursor-pointer select-none inline-block text-fuchsia-400 hover:text-fuchsia-600 font-medium text-sm transition-colors"
        onClick={() => setNewUser(!isNewUser)}
      >
        {isNewUser
          ? "Already have an account? Sign in"
          : "Don't have an account "}
      </div>
    </div>
  );
};

export default Form;
