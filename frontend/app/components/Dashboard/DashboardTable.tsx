"use client";

interface DashboardData {
  created_at: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
}

import { MdDelete } from "react-icons/md";

const DashboardForm = ({ data }: { data: DashboardData[] }) => {
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
    <table className="w-full">
      {/* table head */}
      <thead>
        <tr>
          {tableRow.map((tr, i) => (
            <th
              key={i}
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase"
            >
              {tr.text}
            </th>
          ))}
        </tr>
      </thead>

      {/* table body */}

      <tbody>
        {data.map((t, i) => (
          <tr key={i}>
            <td className="px-6 py-4">
              {new Date(t.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </td>
            <td className="px-6 py-4 ">
              <a
                className="text-fuchsia-500 hover:text-fuchsia-800 underline "
                target="_blank"
                href={t.originalUrl}
              >
                {t.originalUrl}
              </a>
            </td>
            <td className="px-6 py-4">
              <a
                className="bg-fuchsia-200 text-fuchsia-500 px-3 py-1 rounded-md underline "
                target="_blank"
                href={`http://localhost:5000/${t.shortCode}`}
              >
                {t.shortCode}
              </a>
            </td>
            <td className="px-6 py-4">{t.clicks}</td>
            <td className="px-6 py-4">
              <MdDelete className="text-2xl text-red-500 hover:text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardForm;
