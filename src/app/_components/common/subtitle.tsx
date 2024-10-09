type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <h2 className={`text-3xl font-semibold text-primary ${className}`}>
      {children}
    </h2>
  );
};

export default Subtitle;
