"use client";

import { MdOutlineDashboard } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getUrlData } from "@/app/_lib/api/shorturls";
import getUserData from "@/app/_lib/getUser";
import DashboardForm from "./DashboardTable";

const Dashboard = () => {
  const user = getUserData;

  const { data } = useQuery({
    queryKey: ["urls", user?.email],
    queryFn: () => getUrlData(user?.email),
    enabled: !!user?.email,
  });

  return (
    <div className="container mx-auto custom-container mt-20">
      <div className="flex items-center gap-3">
        <MdOutlineDashboard className="text-5xl text-fuchsia-400" />

        <div>
          <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
          <p className="text-gray-700">Manage and track your shortened links</p>
        </div>
      </div>

      <div className="mt-10 ">
        {/* Dashboard content goes here */}
        <div
          className={`bg-zinc-50  rounded-lg shadow-md border-2 border-zinc-200 border-dashed w-full h-100  ${
            data?.length > 0 ? "p-1" : "flex items-center justify-center p-6"
          }`}
        >
          {/* empty state */}
          {data?.length === 0 && (
            <div className="text-center w-full">
              {/* icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 mx-auto mb-3">
                <FaLink className=" h-8 w-8" />
              </div>

              <div>
                <h1 className="font-semibold text-gray-600">No links yet</h1>
                <p className="text-gray-600">
                  Shorten your first URL to see it here.
                </p>
              </div>
            </div>
          )}

          {/* when url added */}

          {data?.length > 0 && (
            <div className="w-full overflow-x-auto overflow-y-auto max-h-90">
              <DashboardForm data={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
