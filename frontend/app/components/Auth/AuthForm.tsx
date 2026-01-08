"use client";

import { supabase } from "@/app/_lib/supabase";
import Button from "@/app/components/_ui/Button";
import Input from "@/app/components/_ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const router = useRouter();
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (isNewUser && password !== confirmPassword) {
      toast.warn("Passwords do not match", { position: "top-center" });
      return;
    }

    // create user or sign in
    try {
      if (isNewUser) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast.info(`${data.user.email} check your email for verification`, {
            position: "top-center",
          });
          setNewUser(false);
        }
      } else {
        // Sign In
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast.success(`${data.user.email} signed in successfully!`, {
            position: "top-center",
          });
          // go to home
          router.push("/home");
        }
      }
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-center" });
      }
    }
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
            customClass="py-2 px-4 mt-4 w-full cursor-pointer"
            onClick={undefined}
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
