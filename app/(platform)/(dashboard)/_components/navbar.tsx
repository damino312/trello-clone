import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center  gap-x-4 ">
          <div className="hidden md:block">
            <Logo />
          </div>
          <Button
            variant={"babyBlue"}
            size="sm"
            className="hidden md:block px-4"
          >
            Create
          </Button>
          <Button
            variant={"babyBlue"}
            size="sm"
            className="px-3 py-2 block md:hidden"
          >
            +
          </Button>
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
