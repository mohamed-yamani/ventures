type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-3xl font-semibold text-primary">{children}</h2>;
};

export default Subtitle;
