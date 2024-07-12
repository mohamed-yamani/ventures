import ActionButton from "../common/button";
import CompanyImage from "../common/company_image";
import Subtitle from "../common/subtitle";
import Title from "../common/title";

const Companies = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-evenly bg-white">
      <div className="container flex w-full flex-col bg-white text-center">
        <Title>OUR PORTFOLIO</Title>
        <Subtitle>Discover the companies we’ve funded</Subtitle>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CompanyImage src="/assets/img1.png" alt="Company 1" />
        <CompanyImage src="/assets/img2.png" alt="Company 2" />
        <CompanyImage src="/assets/img3.png" alt="Company 3" />
        <CompanyImage src="/assets/img4.png" alt="Company 4" />
        <CompanyImage src="/assets/img5.png" alt="Company 5" />
        <CompanyImage src="/assets/img6.png" alt="Company 6" />
        <CompanyImage src="/assets/img7.png" alt="Company 7" />
        <CompanyImage src="/assets/img8.png" alt="Company 8" />
        <CompanyImage src="/assets/img9.png" alt="Company 9" />
        <CompanyImage src="/assets/img10.png" alt="Company 10" />
        <CompanyImage src="/assets/img11.png" alt="Company 11" />
        <CompanyImage src="/assets/img12.png" alt="Company 12" />
      </div>
      <ActionButton>CHECK OUR PORTFOLIO</ActionButton>
    </div>
  );
};

export default Companies;
