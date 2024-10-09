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

// BANDLE
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

type PaliersDetails = {
  Type: string;
  Diamètre: string[];
  Roulement: string[];
};

// Table data in TypeScript format
const paliersData: PaliersDetails = {
  Type: "palier à semelle pour roulements avec manchon de serrage",
  Diamètre: ["90 mm", "80 mm", "80 mm", "90 mm", "90 mm", "", "", ""],
  Roulement: ["23220K", "22218K", "22218K", "23220K", "23220K", "", "", ""],
};

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

// Goulotte de jetée
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

// Autres
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

// React component to render the table
const CalculationCharacteristicsTable: React.FC = () => {
  return (
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
            colSpan={4}
          >
            Installation
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={5}
          >
            Product
          </th>
        </tr>
        {/* Installation Rows */}
        <tr>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={3}
          >
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
          <td
            className="border border-gray-400 px-4 py-2 font-normal"
            colSpan={2}
          >
            Angle de talus naturel
          </td>
          <td className="border border-gray-400 px-4 py-2 font-normal">
            {calculationData.product["Phosph. Brut"]["Natural Angle of Repose"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={3}>
            Drum Centers Distance
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.installation["Drum Centers Distance"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.product["Product 1"]["Grain Size"]}
          </td>

          <td className="border border-gray-400 px-4 py-2">15 * 50 mm</td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Angle de talus dynamique
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.product["Phosph. Brut"]["Dynamic Angle of Repose"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={3}>
            Elevation
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.installation.Elevation}
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.product["Product 1"]["Apparent Density"]}
          </td>

          <td className="border border-gray-400 px-4 py-2">1,2 à 1,4 T/m3</td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
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
          <td className="border border-gray-400 px-4 py-2" colSpan={3}>
            Nominal Flow Rate
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.installation["Nominal Flow Rate"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.product["Product 1"].Aggressiveness}
          </td>

          <td className="border border-gray-400 px-4 py-2">non. corrosif</td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Abrasivité
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.product["Phosph. Brut"].Abrasiveness}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={3}>
            Maximum Flow Rate
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.installation["Maximum Flow Rate"]}
          </td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={3}>
            Belt Speed
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.installation["Belt Speed"]}
          </td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
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
          <td className="border border-gray-400 px-4 py-2">
            {calculationData.calculation["Calculation Density"]}
          </td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>
        {/* Dynamic Angle of Repose (Calculation) */}
        <tr>
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={3}
          >
            Dynamic Angle of Repose (Calculation)
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {
              calculationData.calculation[
                "Dynamic Angle of Repose (Calculation)"
              ]
            }
          </td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>
        {/* command group */}
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
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={9}
            rowSpan={1}
          >
            Nombre de groupes de commande = 1
          </th>
        </tr>
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={4}
          >
            Motor
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
            Reducer
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={3}
          >
            Intermediate Organs
          </th>
        </tr>
        {/* Motor Data */}
        <tr>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
            Absorbed Power
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor["Absorbed Power"]}
          </td>
          <td className="border border-gray-400 px-4 py-2 font-bold">Type</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer.Type}
          </td>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
            GV Coupling
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["GV Coupling"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Installed Power
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor["Installed Power"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">Axis Arrangement</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer["Axis Arrangement"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Hydraulic Coupling
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["Hydraulic Coupling"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Motor Type
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor["Motor Type"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">Material</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer.Material}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            PV Coupling
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["PV Coupling"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Synchronization Speed
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor["Synchronization Speed"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">Reduction Ratio</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer["Reduction Ratio"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Band Filling Rate
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["Band Filling Rate"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Supply Voltage
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor["Supply Voltage"]}
          </td>
          <td className="border border-gray-400 px-4 py-2">Anti-Return</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer["Anti-Return"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Brake Torque
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["Brake Torque"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Frequency
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {commandGroupData.motor.Frequency}
          </td>
          <td className="border border-gray-400 px-4 py-2">Speed Variator</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer["Speed Variator"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            Oil Fill Coupling
          </td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.intermediateOrgans["Oil Fill Coupling"]}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2">Reference</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer.Reference}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2">Oil Fill</td>
          <td className="border border-gray-400 px-4 py-2">
            {commandGroupData.reducer["Oil Fill"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>
        {/* BANDLE */}
        <tr>
          {/* Vertical Header "Bande" */}
          <td
            className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
            rowSpan={3}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              width: "1px",
            }}
          >
            Bande
          </td>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
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
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
            Nombre de plis
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {bandeData["Nombre de plis"]}
          </td>
        </tr>
        <tr>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
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
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
            Coefficient de sécurité
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {bandeData["Coefficient de sécurité"]}
          </td>
        </tr>
        <tr>
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
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
          <td
            className="border border-gray-400 px-4 py-2 font-bold"
            colSpan={2}
          >
            Revêtement inférieur
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {bandeData["Revêtement inférieur"]}
          </td>
        </tr>
        {/* Stations & Rouleaux */}
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
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
            colSpan={2}
          >
            Type des stations
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Espacement
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Diamètre
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Longueur
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Angle d'auge
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Roulement
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Revêtement
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold text-black"
            rowSpan={1}
          >
            Nbre de Stat
          </th>
        </tr>
        {stationsData.map((station, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2" colSpan={2}>
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
        {/*  Tambours */}
        <tr>
          <td
            className="border border-gray-400 bg-blue-200 px-4 py-2 text-center font-bold text-blue-900"
            rowSpan={6}
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

        <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
          Diamètre
        </td>
        {tamboursData.Diamètre.map((diam, index) => (
          <td key={index} className="border border-gray-400 px-4 py-2">
            {diam}
          </td>
        ))}

        <tr>
          <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
            Largeur
          </td>
          {tamboursData.Largeur.map((largeur, index) => (
            <td key={index} className="border border-gray-400 px-4 py-2">
              {largeur}
            </td>
          ))}
        </tr>

        <tr>
          <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
            Revêtement
          </td>
          {tamboursData.Revêtement.map((rev, index) => (
            <td key={index} className="border border-gray-400 px-4 py-2">
              {rev}
            </td>
          ))}
        </tr>

        <tr>
          <td className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold">
            Nombre
          </td>
          {tamboursData.Nombre.map((nombre, index) => (
            <td key={index} className="border border-gray-400 px-4 py-2">
              {nombre}
            </td>
          ))}
        </tr>

        {/* Plan d'execution row */}
        <tr>
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={1}
          >
            Plan d'execution
          </td>
          <td
            className="border border-gray-400 px-4 py-2 text-center"
            colSpan={8}
          >
            {tamboursData["Plan d'execution"]}
          </td>
        </tr>

        {/* Paliers	 */}

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

        {/* système de tension */}
        <tr>
          <td
            className="border border-gray-400 bg-blue-200 px-4 py-2 font-bold text-blue-900"
            rowSpan={3}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              width: "1px",
              verticalAlign: "top",
            }}
          >
            système de tension
          </td>
        </tr>

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

        {/* Accessories */}
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
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
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
          <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"></td>
          <td className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"></td>
        </tr>

        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
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
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2"></td>
        </tr>

        {/* Goulotte de jetée	 */}
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
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={2}
          >
            Type de goulotte
          </td>
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={5}
          >
            Contrôle de niveau
          </td>
          <td
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={2}
          >
            Positions des sondes
          </td>
        </tr>

        <tr>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {goulotteData["Type de goulotte"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={5}>
            {goulotteData["Contrôle de niveau"]}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {goulotteData["Positions des sondes"]}
          </td>
        </tr>

        {/* Revêtement, Matériau, and Epaisseur headers */}
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={2}
          ></th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={5}
          >
            Matériau
          </th>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 font-bold"
            colSpan={2}
          >
            Epaisseur
          </th>
        </tr>

        {/* Tôlerie with two dashes */}
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
            Tôlerie
          </th>
          <td className="border border-gray-400 px-4 py-2" colSpan={5}>
            {goulotteData.Tôlerie.Matériau}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {goulotteData.Tôlerie.Epaisseur}
          </td>
        </tr>

        {/* Revêtement values */}
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
            Revêtement
          </th>

          <td className="border border-gray-400 px-4 py-2" colSpan={5}>
            {goulotteData.Revêtement.Matériau}
          </td>
          <td className="border border-gray-400 px-4 py-2" colSpan={2}>
            {goulotteData.Revêtement.Epaisseur}
          </td>
        </tr>

        {/* Autres Table */}
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
              className={`border border-gray-400 px-4 py-2 ${
                index === 0 ? "bg-purple-200 font-bold" : "text-red-500"
              }`}
              colSpan={index === 0 ? 2 : index === 1 ? 5 : 2}
            >
              {value}
            </td>
          ))}
        </tr>

        {/* Palan row */}
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
            Palan
          </th>
          <td className="border border-gray-400 px-4 py-2" colSpan={7}>
            {autresData.Palan}
          </td>
        </tr>

        {/* Bascule intégratrice row */}
        <tr>
          <th
            className="border border-gray-400 bg-purple-200 px-4 py-2 text-left font-bold"
            colSpan={2}
          >
            Bascule intégratrice
          </th>
          <td className="border border-gray-400 px-4 py-2" colSpan={7}>
            {autresData["Bascule intégratrice"]}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CalculationCharacteristicsTable;
