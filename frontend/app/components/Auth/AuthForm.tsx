"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { useState } from "react";

const Form = () => {
  const [isNewUser, setNewUser] = useState(false);

  const customClass = "w-full px-3 py-2 ring ring-gray-600 mt-1 ";

  // input data
  const inputData = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "User@mail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "text",
      placeholder: "••••••••",
    },
  ];

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

    console.log(email, password);
  };

  return (
    <div className="mt-4 w-75">
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* email pass fields */}
          <div>
            {inputData.map((input, index) => (
              <div key={index} className={index !== 0 ? "mt-4" : ""}>
                <legend className="text-sm text-gray-500">{input.label}</legend>
                <Input
                  text={input.placeholder}
                  type={input.type}
                  name={input.name}
                  customClass={customClass}
                />
              </div>
            ))}
          </div>

          {/* confirm password */}
          {isNewUser && (
            <div className="mt-4">
              <legend className="text-sm text-gray-500">
                Confirm Password
              </legend>
              <Input
                text={"••••••••"}
                type={"text"}
                name={"confirmPassword"}
                customClass={customClass}
              />
            </div>
          )}

          {/* form btn */}
          <Button
            isNewUser={isNewUser ? "Sign Up" : "Sign In"}
            icon={""}
            text={""}
            customClass="py-2 px-4 mt-4 w-full"
          />
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
