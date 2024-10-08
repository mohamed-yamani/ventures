import React from "react";

// Define TypeScript types for the data
type MotorDetails = {
  "Absorbed Power": string;
  "Installed Power": string;
  "Motor Type": string;
  "Synchronization Speed": string;
  "Supply Voltage": string;
  Frequency: string;
};

type ReducerDetails = {
  Type: string;
  "Axis Arrangement": string;
  Material: string;
  "Reduction Ratio": string;
  "Anti-Return": string;
  "Speed Variator": string;
  "Oil Fill": string;
  Reference: string;
};

type IntermediateOrgansDetails = {
  "GV Coupling": string;
  "Hydraulic Coupling": string;
  "PV Coupling": string;
  "Band Filling Rate": string;
  "Brake Torque": string;
  "Oil Fill Coupling": string;
};

// Define the table data type structure
type CommandGroupData = {
  motor: MotorDetails;
  reducer: ReducerDetails;
  intermediateOrgans: IntermediateOrgansDetails;
};

// Table data in TypeScript format
const commandGroupData: CommandGroupData = {
  motor: {
    "Absorbed Power": "16.00 Kw",
    "Installed Power": "1 * 30 Kw",
    "Motor Type": "Asynchronous",
    "Synchronization Speed": "1500 rpm",
    "Supply Voltage": "525 V",
    Frequency: "50 Hz",
  },
  reducer: {
    Type: "Hollow Shaft",
    "Axis Arrangement": "Perpendicular",
    Material: "Gray Cast Iron",
    "Reduction Ratio": "22.4",
    "Anti-Return": "Yes",
    "Speed Variator": "Not required",
    Reference: "RC21 140 UO2A / 23,8",
    "Oil Fill": "6.8 L",
  },
  intermediateOrgans: {
    "GV Coupling": "GK 168",
    "Hydraulic Coupling": "274DTA",
    "PV Coupling": "None",
    "Band Filling Rate": "72%",
    "Brake Torque": "9 N.m",
    "Oil Fill Coupling": "4.1 L",
  },
};

// React component to render the table
const CommandGroupTable: React.FC = () => {
  return (
    <div className="flex w-full px-4">
      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            {/* New Header Row for 'Nombre de groupes de commande = 1' */}
            <tr>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-center font-bold"
                colSpan={6}
              >
                Nombre de groupes de commande = 1
              </th>
            </tr>
          </thead>

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
                Command Group
              </td>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
                colSpan={2}
              >
                Motor
              </th>
              <th
                className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
                colSpan={2}
              >
                Reducer
              </th>
              <th className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold">
                Intermediate Organs
              </th>
            </tr>
            {/* Motor Data */}
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Absorbed Power
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor["Absorbed Power"]}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Type
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer.Type}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                GV Coupling
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["GV Coupling"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Installed Power
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor["Installed Power"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Axis Arrangement
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer["Axis Arrangement"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Hydraulic Coupling
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["Hydraulic Coupling"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">Motor Type</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor["Motor Type"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">Material</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer.Material}
              </td>
              <td className="border border-gray-400 px-4 py-2">PV Coupling</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["PV Coupling"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Synchronization Speed
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor["Synchronization Speed"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Reduction Ratio
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer["Reduction Ratio"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Band Filling Rate
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["Band Filling Rate"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">
                Supply Voltage
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor["Supply Voltage"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">Anti-Return</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer["Anti-Return"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">Brake Torque</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["Brake Torque"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2">Frequency</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.motor.Frequency}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Speed Variator
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer["Speed Variator"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                Oil Fill Coupling
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.intermediateOrgans["Oil Fill Coupling"]}
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2">Reference</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer.Reference}
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2">Oil Fill</td>
              <td className="border border-gray-400 px-4 py-2">
                {commandGroupData.reducer["Oil Fill"]}
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommandGroupTable;
