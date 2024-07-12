type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <h2 className="font-montserrat text-3xl font-normal text-primary">
      {children}
    </h2>
  );
};

export default Subtitle;
