import Subtitle from "../common/subtitle";
import Title from "../common/title";

const PartnersSection = () => {
  return (
    <section className="relative w-screen bg-gradient-to-r from-white to-[#cbdeed]">
      <div className="absoolute right-0 top-0 h-20 w-20 bg-primary" />
      <div className="absolute left-14 top-14 h-10 w-10 bg-blue-500" />
      <div className="container">
        <div className="container flex w-full flex-col items-center justify-center gap-4 pb-16">
          <Title>OUR PORTFOLIO</Title>
          <Subtitle>UM6P Ventures partners</Subtitle>
          <p className="w-3/5 text-center font-medium text-black">
            UM6P Ventures is connected to a global network of universities,
            subject matter experts, incubators, accelerators, and other capital
            investors in Africa. UM6P Ventures is connected to a global network
            of universities, subject matter experts, incubators, accelerators,
            and other capital investors in Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
