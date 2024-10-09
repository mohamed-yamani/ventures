import React from "react";

// Define TypeScript types for the data
type TensionSystemDetails = {
  Type: string;
  "Contrepoids (Kg)": string;
  Position: string;
  "Valeur tension": string;
  Course: string;
  "Treuil dynamométrique": string;
  "Treuil de relevage": string;
  "Chariot de tension": string;
  "Course Chariot": string;
};

// Table data in TypeScript format
const tensionSystemData: TensionSystemDetails = {
  Type: "en danseuse",
  "Contrepoids (Kg)": "572",
  Position: "Au Milieu",
  "Valeur tension": "700 daN",
  Course: "0,57 m",
  "Treuil dynamométrique": "N/A",
  "Treuil de relevage": "Oui",
  "Chariot de tension": "N/A",
  "Course Chariot": "",
};

// React component to render the Tension System table
const TensionSystemTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            {/* <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Type
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Contrepoids (Kg)
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Position
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Valeur tension
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Course
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Treuil dynamométrique
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Treuil de relevage
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Chariot de tension
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Course Chariot
              </th>
            </tr> */}
          </thead>
          <tbody>
            <td
              className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
              rowSpan={4}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                width: "1px",
                verticalAlign: "top",
              }}
            >
              système de tension
            </td>

            <tr>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Type
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Contrepoids (Kg)
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Position
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Valeur tension
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Course
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Treuil dynamométrique
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Treuil de relevage
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Chariot de tension
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Course Chariot
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData.Type}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Contrepoids (Kg)"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData.Position}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Valeur tension"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData.Course}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Treuil dynamométrique"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Treuil de relevage"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Chariot de tension"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {tensionSystemData["Course Chariot"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TensionSystemTable;
