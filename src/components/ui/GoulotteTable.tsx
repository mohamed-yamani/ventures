import React from "react";

// Define TypeScript types for the data
type GoulotteDetails = {
  "Type de goulotte": string;
  "Contrôle de niveau": string;
  "Positions des sondes": string;
  Revêtement: {
    Matériau: string;
    Epaisseur: string;
  };
  Tôlerie: {
    Matériau: string;
    Epaisseur: string;
  };
};

// Table data in TypeScript format
const goulotteData: GoulotteDetails = {
  "Type de goulotte": "Jetée simple",
  "Contrôle de niveau": "N/A",
  "Positions des sondes": "N/A",
  Revêtement: {
    Matériau:
      "Tôles d’usure sur zone d'impact CREUSABRO + PEHD sur zone de glissement",
    Epaisseur: "8 mm + 12 mm",
  },
  Tôlerie: {
    Matériau: "-",
    Epaisseur: "-",
  },
};

// React component to render the Goulotte de jetée table
const GoulotteTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            {/* Vertical Header "Goulotte de jetée" */}
            <tr>
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={5}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                  verticalAlign: "top",
                }}
              >
                Goulotte de jetée
              </td>
              {/* Row values */}
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Type de goulotte
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Contrôle de niveau
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Positions des sondes
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData["Type de goulotte"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData["Contrôle de niveau"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData["Positions des sondes"]}
              </td>
            </tr>

            {/* Revêtement, Matériau, and Epaisseur headers */}
            <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold"></th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Matériau
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Epaisseur
              </th>
            </tr>

            {/* Tôlerie with two dashes */}
            <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Tôlerie
              </th>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData.Tôlerie.Matériau}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData.Tôlerie.Epaisseur}
              </td>
            </tr>

            {/* Revêtement values */}
            <tr>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold">
                Revêtement
              </th>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData.Revêtement.Matériau}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {goulotteData.Revêtement.Epaisseur}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoulotteTable;
