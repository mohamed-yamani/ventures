import { Button } from "~/components/ui/button";

type ActionButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const ActionButton = ({ onClick, children, className }: ActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-secondary text-white ${className}`}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
