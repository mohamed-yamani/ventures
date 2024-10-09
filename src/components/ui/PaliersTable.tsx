import React from "react";

// Define TypeScript types for the data
type PaliersDetails = {
  Type: string;
  Diamètre: string[];
  Roulement: string[];
};

// Table data in TypeScript format
const paliersData: PaliersDetails = {
  Type: "palier à semelle pour roulements avec manchon de serrage",
  Diamètre: ["90 mm", "80 mm", "80 mm", "90 mm", "90 mm", "", ""],
  Roulement: ["23220K", "22218K", "22218K", "23220K", "23220K", "", ""],
};

// React component to render the Paliers table
const PaliersTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            {/* Vertical Header "Paliers" */}
            <tr>
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={3}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                  verticalAlign: "top",
                }}
              >
                Paliers
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Type
              </td>
              <td
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-normal"
                colSpan={4}
              >
                {paliersData.Type}
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2"></td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2"></td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2"></td>
            </tr>

            <tr>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Diamètre
              </td>
              {paliersData.Diamètre.map((diam, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {diam}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Roulement
              </td>
              {paliersData.Roulement.map((roul, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {roul}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaliersTable;
