import React from "react";

// Define TypeScript types for the data
type AccessoiresDetails = {
  "Racleur en tête": string;
  "Chasse pierres": string;
  "Arrêt d'urgence": {
    Type: string;
    "En tête et en queue": string;
  };
  "Déport bande": string;
  "Contrôleur de rotation": string;
};

// Table data in TypeScript format
const accessoiresData: AccessoiresDetails = {
  "Racleur en tête": "Lames tangentielle",
  "Chasse pierres": "en V",
  "Arrêt d'urgence": {
    Type: "à cable - 1 paires",
    "En tête et en queue": "Oui",
  },
  "Déport bande": "Min 2 paires",
  "Contrôleur de rotation": "1",
};

// React component to render the Accessoires table
const AccessoiresTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            {/* Vertical Header "Accessoires" */}
            <tr>
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={2}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                  verticalAlign: "top",
                }}
              >
                Accessoires
              </td>
              {/* Racleur en tête, Chasse pierres, and Arrêt d'urgence values */}
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Racleur en tête
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Chasse pierres
              </td>
              <td
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
                colSpan={2}
              >
                Arrêt d'urgence
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Déport bande
              </td>
              <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Contrôleur de rotation
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                {accessoiresData["Racleur en tête"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {accessoiresData["Chasse pierres"]}
              </td>
              {/* Fixing the structure for Arrêt d'urgence */}
              <td className="border border-gray-400 px-4 py-2">
                <div className="font-bold">Type</div>
                <div>{accessoiresData["Arrêt d'urgence"].Type}</div>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <div className="font-bold">En tête et en queue</div>
                <div>
                  {accessoiresData["Arrêt d'urgence"]["En tête et en queue"]}
                </div>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {accessoiresData["Déport bande"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {accessoiresData["Contrôleur de rotation"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessoiresTable;
