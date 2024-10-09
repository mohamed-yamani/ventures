import AccessoiresTable from "./AccessoiresTable";
import AutresTable from "./AutresTable";
import BandeTable from "./Bande";
import CalculationCharacteristicsTable from "./CalculationCharacteristicsTable";
import CommandGroupTable from "./CommandGroupTable";
import GoulotteTable from "./GoulotteTable";
import PaliersTable from "./PaliersTable";
import StationsTable from "./StationsTable";
import TamboursTable from "./TamboursTable";
import TensionSystemTable from "./TensionSystemTable";

const Convoyeurs = () => {
  return (
    <div>
      <CalculationCharacteristicsTable />
      <CommandGroupTable />
      <BandeTable />
      <StationsTable />
      <TamboursTable />
      <PaliersTable />
      <TensionSystemTable />
      <AccessoiresTable />
      <GoulotteTable />
      <AutresTable />
    </div>
  );
};

export default Convoyeurs;
