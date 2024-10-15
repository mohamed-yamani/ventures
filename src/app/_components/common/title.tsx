type TitleProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const Title = ({ children, className, color }: TitleProps) => {
  return (
    <h1 className={`text-l ${color ? color : "text-secondary"} ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
