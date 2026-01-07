"use client";

import Button from "@/app/ui/Button";
import { FaSignOutAlt } from "react-icons/fa";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import getUserData from "@/app/lib/getUser";

const Nav = () => {
  const user = getUserData;

  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
      return;
    }

    router.push("/");

    toast.success("Signed out successfully", { position: "top-center" });
  };

  return (
    <nav className="">
      <div className="container mx-auto custom-container">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-bold text-fuchsia-500 py-4">SnapURL</h1>

          <div>
            <ul className="flex items-center gap-5">
              <li>
                <span className="text-gray-600 font-semibold">
                  {/* email  */}
                  {user?.email}
                </span>
              </li>
              {/* signout */}
              <li>
                <Button
                  isNewUser=""
                  icon={<FaSignOutAlt />}
                  text="Sign Out"
                  customClass="flex items-center gap-2 px-4 py-2 cursor-pointer"
                  onClick={handleSignOut}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
