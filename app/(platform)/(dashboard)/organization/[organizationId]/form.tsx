"use client";

import { create } from "@/actions/create-dashboard";
import { useFormState } from "react-dom";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          required
          className="border border-black"
        />
        {state?.errors?.title && <div>{state.errors.title}</div>}
      </div>
    </form>
  );
};
