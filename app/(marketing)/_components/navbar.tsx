import { Button } from "@/components/ui/button";

import Logo from "./logo";
export default function NavBar() {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="hidden md:block">
          <Logo />
        </div>

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="border" size={"sm"} variant={"ghost"}>
            Login
          </Button>
          <Button>Get Easify for free</Button>
        </div>
      </div>
    </div>
  );
}
