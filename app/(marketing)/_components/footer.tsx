import { Button } from "@/components/ui/button";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full px-4 border-t bg-slate-100 py-4 flex justify-center">
      <div className="hidden md:flex items-center">
        <Logo />
      </div>
      <div className="flex justify-between md:max-w-screen-2xl w-full md:justify-end">
        <Button variant={"ghost"}>Privacy Policy</Button>
        <Button variant={"ghost"}>Terms of Service</Button>
      </div>
    </div>
  );
}
