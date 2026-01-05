import { MdOutlineDashboard } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const Dashboard = () => {
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
        <div className="bg-zinc-50 p-6 rounded-lg shadow-md border-2 border-zinc-200 border-dashed w-full h-80 flex items-center justify-center ">
          <div className="text-center ">
            {/* icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 mx-auto mb-3">
              <FaLink className=" h-8  w-8" />
            </div>

            <div>
              <h1 className="font-semibold text-gray-600">No links yet</h1>
              <p className="text-gray-600">
                Shorten your first URL to see it here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
