import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import { BoardOption } from "./board-options";

interface BoardNavBarProps {
  data: Board;
}

export const BoardNavBar = async ({ data }: BoardNavBarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed flex top-14 items-center px-6 gap-x-6 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOption id={data.id} />
      </div>
    </div>
  );
};
