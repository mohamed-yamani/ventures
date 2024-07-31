type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-l text-secondary">{children}</h1>;
};

export default Title;
