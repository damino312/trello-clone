import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator />
      <div className="p-2 md:p-4">
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
