"use client";

interface DashboardData {
  created_at: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  id: string;
}

import { deleteurlData } from "@/app/_lib/api/shorturls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { MdCopyAll } from "react-icons/md";

const DashboardForm = ({ data }: { data: DashboardData[] }) => {
  const queryClient = useQueryClient();

  const deleteData = useMutation({
    mutationFn: deleteurlData,
    onSuccess: () => {
      toast.success("Deleted", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["urls"] });
    },
  });

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this short URL? This action cannot be undone."
    );

    if (!confirmed) return;

    deleteData.mutate(id);
  };

  const tableRow = [
    {
      text: "Created At",
    },
    {
      text: "Original URL",
    },
    {
      text: "Short URL",
    },
    {
      text: "Clicks",
    },
    {
      text: "Actions",
    },
  ];
  return (
    <table className="w-full table-auto  ">
      {/* table head */}
      <thead className="sticky top-0 z-10 bg-fuchsia-300">
        <tr>
          {tableRow.map((tr, i) => (
            <th
              key={i}
              className="px-6 py-4 text-left text-xs font-semibold text-white uppercase"
            >
              {tr.text}
            </th>
          ))}
        </tr>
      </thead>

      {/* table body */}
      <tbody>
        {data.map((t, i) => {
          return (
            <tr key={i}>
              <td className="px-6 py-4">
                {new Date(t.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td className="px-6 py-4">
                <a
                  className="text-fuchsia-500 hover:text-fuchsia-800 underline"
                  target="_blank"
                  href={t.originalUrl}
                >
                  <p className="truncate w-80">{t.originalUrl}</p>
                </a>
              </td>

              <td className="px-6 py-4 flex items-center gap-3 ">
                <a
                  className="bg-fuchsia-200 text-fuchsia-500 px-3 py-1 rounded-md underline font-semibold"
                  target="_blank"
                  href={`http://localhost:5000/${t.shortCode}`}
                >
                  {t.shortCode}
                </a>
                <MdCopyAll
                  className="cursor-pointer hover:text-fuchsia-400 text-xl"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:5000/${t.shortCode}`
                    );
                    toast.info(`${t.shortCode} copied to clipboard`, {
                      position: "top-center",
                    });
                  }}
                />
              </td>

              <td className="px-6 py-4">{t.clicks}</td>

              <td className="px-6 py-4">
                <MdDelete
                  onClick={() => handleDelete(t.id)}
                  className="text-2xl text-red-500 hover:text-red-400 cursor-pointer"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DashboardForm;
