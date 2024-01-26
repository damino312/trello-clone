"use client";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import { useFormState } from "react-dom";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          required
          className="border border-black"
        />
      </div>
    </form>
  );
};
