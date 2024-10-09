import React from "react";

// Define TypeScript types for the data
type BandeDetails = {
  "Largeur de la bande": string;
  "Classe de la bande": string;
  "Nombre de plis": string;
  Carcasse: string;
  "Taux de travail": string;
  "Coefficient de sécurité": string;
  "Qualité du revêtement": string;
  "Revêtement supérieur": string;
  "Revêtement inférieur": string;
};

// Table data in TypeScript format
const bandeData: BandeDetails = {
  "Largeur de la bande": "800 mm",
  "Classe de la bande": "500 daN/cm",
  "Nombre de plis": "4",
  Carcasse: "textile",
  "Taux de travail": "23,00 daN/cm",
  "Coefficient de sécurité": "22,00",
  "Qualité du revêtement": "AA",
  "Revêtement supérieur": "6 mm",
  "Revêtement inférieur": "4 mm",
};

// React component to render the Bande table
const BandeTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead></thead>
          <tbody>
            <tr>
              {/* Vertical Header "Bande" */}
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={5}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                }}
              >
                Bande
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Largeur de la bande
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Largeur de la bande"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Classe de la bande
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Classe de la bande"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Nombre de plis
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Nombre de plis"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Carcasse
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData.Carcasse}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Taux de travail
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Taux de travail"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Coefficient de sécurité
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Coefficient de sécurité"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Qualité du revêtement
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Qualité du revêtement"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Revêtement supérieur
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Revêtement supérieur"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Revêtement inférieur
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {bandeData["Revêtement inférieur"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandeTable;
