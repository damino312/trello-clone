"use client";

import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover";
import { MoreHorizontal, X } from "lucide-react";

interface BoardOptionProps {
  id: string;
}
export const BoardOption = ({ id }: BoardOptionProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      console.error(error);
    },
  });
  const onDelete = () => {
    execute({
      id,
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-0 pt-3 pb-3 bg-white"
        side="bottom"
        align="start"
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Действия борда
        </div>
        <PopoverClose asChild>
          <Button className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600">
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          disabled={isLoading}
          variant="ghost"
          onClick={onDelete}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
        >
          Удалить этот борд
        </Button>
      </PopoverContent>
    </Popover>
  );
};
