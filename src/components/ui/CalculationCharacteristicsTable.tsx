import React from "react";

// Define TypeScript types for the data
type InstallationDetails = {
  "Conveyor Reference": string;
  "Drum Centers Distance": string;
  Elevation: string;
  "Nominal Flow Rate": string;
  "Maximum Flow Rate": string;
  "Belt Speed": string;
};

type ProductDetails = {
  "Grain Size": string;
  "Apparent Density": string;
  Aggressiveness: string;
};

type RawPhosphateDetails = {
  "Natural Angle of Repose": string;
  "Dynamic Angle of Repose": string;
  "Moisture Content (clogging)": string;
  Abrasiveness: string;
};

type CalculationDetails = {
  "Calculation Density": string;
  "Dynamic Angle of Repose (Calculation)": string;
};

// Define the table data type structure
type CalculationData = {
  installation: InstallationDetails;
  product: {
    "Product 1": ProductDetails;
    "Phosph. Brut": RawPhosphateDetails;
  };
  calculation: CalculationDetails;
};

// Table data in TypeScript format
const calculationData: CalculationData = {
  installation: {
    "Conveyor Reference": "Cal(136)",
    "Drum Centers Distance": "38,00 m",
    Elevation: "9,60 m",
    "Nominal Flow Rate": "350 T/h",
    "Maximum Flow Rate": "400 T/h",
    "Belt Speed": "1,78 m/s",
  },
  product: {
    "Product 1": {
      "Grain Size": "Granulométrie",
      "Apparent Density": "Densité apparente",
      Aggressiveness: "Agressivité",
    },
    "Phosph. Brut": {
      "Natural Angle of Repose": "30 à 35°",
      "Dynamic Angle of Repose": "15°",
      "Moisture Content (clogging)": "10 à 14%",
      Abrasiveness: "assez abrasif",
    },
  },
  calculation: {
    "Calculation Density": "1 200,00 T/m3",
    "Dynamic Angle of Repose (Calculation)": "15,00°",
  },
};

// React component to render the table
const CalculationCharacteristicsTable: React.FC = () => {
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
                rowSpan={10}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  width: "1px",
                }}
              >
                Calculation Characteristics
              </td>
            </tr>
            <tr>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
                colSpan={2}
              >
                Installation
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
                colSpan={4}
              >
                Product
              </th>
            </tr>
            {/* Installation Rows */}
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Conveyor Reference
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation["Conveyor Reference"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Product 1
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Phosph. Brut
              </td>
              <td className="border border-gray-400 px-4 py-2 font-normal">
                Angle de talus naturel
              </td>
              <td className="border border-gray-400 px-4 py-2 font-normal">
                {
                  calculationData.product["Phosph. Brut"][
                    "Natural Angle of Repose"
                  ]
                }
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Drum Centers Distance
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation["Drum Centers Distance"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.product["Product 1"]["Grain Size"]}
              </td>

              <td className="border border-gray-400 px-4 py-2">15 * 50 mm</td>
              <td className="border border-gray-400 px-4 py-2">
                Angle de talus dynamique
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {
                  calculationData.product["Phosph. Brut"][
                    "Dynamic Angle of Repose"
                  ]
                }
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">Elevation</td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation.Elevation}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.product["Product 1"]["Apparent Density"]}
              </td>

              <td className="border border-gray-400 px-4 py-2">
                1,2 à 1,4 T/m3
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Humidité (colmatage)
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {
                  calculationData.product["Phosph. Brut"][
                    "Moisture Content (clogging)"
                  ]
                }
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Nominal Flow Rate
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation["Nominal Flow Rate"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.product["Product 1"].Aggressiveness}
              </td>

              <td className="border border-gray-400 px-4 py-2">
                non. corrosif
              </td>
              <td className="border border-gray-400 px-4 py-2">Abrasivité</td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.product["Phosph. Brut"].Abrasiveness}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Maximum Flow Rate
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation["Maximum Flow Rate"]}
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">Belt Speed</td>
              <td className="border border-gray-400 px-4 py-2">
                {calculationData.installation["Belt Speed"]}
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>

            {/* Calculation Density */}
            <tr>
              <td
                className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
                colSpan={3}
              >
                Calculation Density
              </td>
              <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                {calculationData.calculation["Calculation Density"]}
              </td>
            </tr>

            {/* Dynamic Angle of Repose (Calculation) */}
            <tr>
              <td
                className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
                colSpan={3}
              >
                Dynamic Angle of Repose (Calculation)
              </td>
              <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                {
                  calculationData.calculation[
                    "Dynamic Angle of Repose (Calculation)"
                  ]
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculationCharacteristicsTable;
