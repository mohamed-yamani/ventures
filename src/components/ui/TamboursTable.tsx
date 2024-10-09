import React from "react";

// Define TypeScript types for the data
type TamboursDetails = {
  Repaire: string[];
  Diamètre: string[];
  Largeur: string[];
  Revêtement: string[];
  Nombre: string[];
  "Plan d'execution": string;
};

// Table data in TypeScript format
const tamboursData: TamboursDetails = {
  Repaire: ["1", "2", "3", "4", "5", "", "", ""],
  Diamètre: ["500 mm", "400 mm", "325 mm", "325 mm", "400 mm", "", "", ""],
  Largeur: ["950 mm", "950 mm", "950 mm", "950 mm", "950 mm", "", "", ""],
  Revêtement: ["15 mm", "-", "20 mm", "20 mm", "-", "", "", ""],
  Nombre: ["1", "1", "2", "2", "1", "", "", ""],
  "Plan d'execution": "CAI-MC-PL01",
};

// React component to render the Tambours table
const TamboursTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={8}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                  verticalAlign: "top",
                }}
              >
                Tambours
              </td>

              {/* Repaire	1	2	3	4	5  add those */}

              <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
                Repaire
              </td>
              {tamboursData.Repaire.map((rep, index) => (
                <td
                  key={index}
                  className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
                >
                  {rep}
                </td>
              ))}
            </tr>

            <td className="border border-gray-400 px-4 py-2 font-bold">
              Diamètre
            </td>
            {tamboursData.Diamètre.map((diam, index) => (
              <td key={index} className="border border-gray-400 px-4 py-2">
                {diam}
              </td>
            ))}

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Largeur
              </td>
              {tamboursData.Largeur.map((largeur, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {largeur}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Revêtement
              </td>
              {tamboursData.Revêtement.map((rev, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {rev}
                </td>
              ))}
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Nombre
              </td>
              {tamboursData.Nombre.map((nombre, index) => (
                <td key={index} className="border border-gray-400 px-4 py-2">
                  {nombre}
                </td>
              ))}
            </tr>

            {/* Empty rows for the additional 8-row total */}
            <tr>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>

            {/* Plan d'execution row */}
            <tr>
              <td
                className="border border-gray-400 px-4 py-2 font-bold"
                colSpan={5}
              >
                Plan d'execution
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {tamboursData["Plan d'execution"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TamboursTable;
