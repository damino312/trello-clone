import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center  gap-x-4 ">
          <div className="hidden md:block">
            <Logo />
          </div>
          <FormPopover align="start" side="bottom" sideOffset={18}>
            <Button
              variant={"babyBlue"}
              size="sm"
              className="hidden md:block px-4"
            >
              Создать
            </Button>
          </FormPopover>
          <FormPopover>
            <Button
              variant={"babyBlue"}
              size="sm"
              className="px-3 py-2 block md:hidden"
            >
              +
            </Button>
          </FormPopover>
        </div>

        <div className="flex gap-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};
