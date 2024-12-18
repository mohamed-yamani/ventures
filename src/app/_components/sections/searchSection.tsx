import { Input } from "../common/input";
import Button from "../common/button";
import { Search } from "lucide-react";
import { Badge } from "~/components/ui/badge";

const SearchSection = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 items-center justify-center gap-4 p-0 py-9 sm:grid-cols-6">
        <div className="col-span-1 flex min-w-max flex-row items-center justify-center bg-white px-3 sm:col-span-5">
          <Search className="text-primary" />
          <Input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR?"
            className="w-full border-b border-white bg-transparent placeholder-primary caret-primary"
          />
        </div>
        <Button className="w-full rounded-none bg-secondary font-normal text-primary text-white hover:bg-white hover:text-primary sm:col-span-1">
          SEARCH
        </Button>
      </div>
      <div className="font-normal text-white">SUGGESTIONS</div>
      <div className="flex flex-wrap items-center justify-start gap-4 py-9">
        <Badge className="cursor-pointer bg-white px-4 py-2 font-semibold text-primary hover:bg-secondary hover:text-white">
          Startups
        </Badge>
        <Badge className="cursor-pointer bg-white px-4 py-2 font-semibold text-primary hover:bg-secondary hover:text-white">
          Deep Tech
        </Badge>
        <Badge className="cursor-pointer bg-white px-3 py-2 font-semibold text-primary hover:bg-secondary hover:text-white">
          Focus Areas
        </Badge>
        <Badge className="cursor-pointer bg-white px-3 py-2 font-semibold text-primary hover:bg-secondary hover:text-white">
          Team
        </Badge>
        <Badge className="cursor-pointer bg-white px-3 py-2 font-semibold text-primary hover:bg-secondary hover:text-white">
          Portfolio
        </Badge>
      </div>
    </div>
  );
};

export default SearchSection;
