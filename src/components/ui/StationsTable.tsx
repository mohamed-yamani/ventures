import React from "react";

// Define TypeScript types for the data
type StationsDetails = {
  "Type des stations": string;
  Espacement: string;
  Diamètre: string;
  Longueur: string;
  "Angle d'auge": string;
  Roulement: string;
  Revêtement: string;
  "Nbre de Stat": string;
};

// Table data in TypeScript format
const stationsData: StationsDetails[] = [
  {
    "Type des stations": "Stations supérieures",
    Espacement: "1 250 mm",
    Diamètre: "Φ 133",
    Longueur: "315 mm",
    "Angle d'auge": "35°",
    Roulement: "6205",
    Revêtement: "Nu",
    "Nbre de Stat": "23 U",
  },
  {
    "Type des stations": "Transition Type 1",
    Espacement: "1 250 mm",
    Diamètre: "Φ 133",
    Longueur: "315 mm",
    "Angle d'auge": "25°",
    Roulement: "6205",
    Revêtement: "Nu",
    "Nbre de Stat": "2 U",
  },
  {
    "Type des stations": "Transition Type 2",
    Espacement: "1 250 mm",
    Diamètre: "Φ 133",
    Longueur: "950 mm",
    "Angle d'auge": "15°",
    Roulement: "6205",
    Revêtement: "Nu",
    "Nbre de Stat": "2 U",
  },
  {
    "Type des stations": "Stations d’impact",
    Espacement: "300 mm",
    Diamètre: "Φ 133",
    Longueur: "315 mm",
    "Angle d'auge": "35°",
    Roulement: "6205",
    Revêtement: "amortisseur",
    "Nbre de Stat": "8 U",
  },
  {
    "Type des stations": "Stations support auto-centreuses",
    Espacement: "30 000 mm",
    Diamètre: "Φ 133",
    Longueur: "315 mm",
    "Angle d'auge": "35°",
    Roulement: "6205",
    Revêtement: "Nu",
    "Nbre de Stat": "8 U",
  },
  {
    "Type des stations": "Stations inférieures",
    Espacement: "2 500 mm",
    Diamètre: "Φ 108",
    Longueur: "950 mm",
    "Angle d'auge": "0°",
    Roulement: "6204",
    Revêtement: "à bague",
    "Nbre de Stat": "11 U",
  },
  {
    "Type des stations": "Stations de retour auto-centreuses",
    Espacement: "30 000 mm",
    Diamètre: "Φ 108",
    Longueur: "950 mm",
    "Angle d'auge": "0°",
    Roulement: "6204",
    Revêtement: "à bague",
    "Nbre de Stat": "1 U",
  },
  {
    "Type des stations": "Stations décrassantes",
    Espacement: "2 500 mm",
    Diamètre: "Φ 108",
    Longueur: "950 mm",
    "Angle d'auge": "0°",
    Roulement: "6204",
    Revêtement: "Spirale",
    "Nbre de Stat": "2 U",
  },
];

// React component to render the Stations & Rouleaux table
const StationsTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <tbody>
            {/* Header Row moved to tbody */}

            {/* Vertical Header "Stations & Rouleaux" */}
            <tr>
              <td
                className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
                rowSpan={10}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                }}
              >
                Stations & Rouleaux
              </td>
            </tr>

            <tr>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Type des stations
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Espacement
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Diamètre
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Longueur
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Angle d'auge
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Roulement
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Revêtement
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold text-black"
                rowSpan={1}
              >
                Nbre de Stat
              </th>
            </tr>

            {stationsData.map((station, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  {station["Type des stations"]}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station.Espacement}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station.Diamètre}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station.Longueur}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station["Angle d'auge"]}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station.Roulement}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station.Revêtement}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {station["Nbre de Stat"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StationsTable;
