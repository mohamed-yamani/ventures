import React from "react";

// Define TypeScript types for the data
type AutresDetails = {
  Capotage: string[];
  Palan: string;
  "Bascule intégratrice": string;
};

// Table data in TypeScript format
const autresData: AutresDetails = {
  Capotage: ["Capotage", "-", "-"],
  Palan: "Electrique - 1,6 T avec monorail",
  "Bascule intégratrice": "Oui",
};

// React component to render the Autres table
const AutresTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            {/* Vertical Header "Autres" */}
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
                Autres
              </td>
              {/* Capotage row with background color for the first cell */}
              {autresData.Capotage.map((value, index) => (
                <td
                  key={index}
                  className={`border border-gray-400 px-4 py-2 text-center ${
                    index === 0 ? "bg-purple-200 font-bold" : "text-red-500"
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>

            {/* Palan row */}
            <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Palan
              </th>
              <td className="border border-gray-400 px-4 py-2" colSpan={3}>
                {autresData.Palan}
              </td>
            </tr>

            {/* Bascule intégratrice row */}
            <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Bascule intégratrice
              </th>
              <td className="border border-gray-400 px-4 py-2" colSpan={3}>
                {autresData["Bascule intégratrice"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AutresTable;
