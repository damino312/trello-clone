"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "babyBlue";
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "babyBlue",
}: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        disabled={pending || disabled}
        type="submit"
        variant={variant}
        className={className}
      >
        {children}
      </Button>
    </>
  );
};
