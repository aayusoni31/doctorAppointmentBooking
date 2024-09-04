import react from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
function CategorySearch() {
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary"> Doctors </span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl">
        Seach Your Doctor and Book Apppointment in one click
      </h2>
      {/* using shadcn input is given first we installed it and use it  */}
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          {" "}
          <Search className="h-4 w-4 mr-2"></Search> Search
        </Button>
      </div>
    </div>
  );
}
export default CategorySearch;
