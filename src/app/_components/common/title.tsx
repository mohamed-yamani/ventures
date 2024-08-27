type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={`text-l text-secondary ${className}`}>{children}</h1>;
};

export default Title;
