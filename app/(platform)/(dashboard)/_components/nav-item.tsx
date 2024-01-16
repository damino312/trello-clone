"use client";

import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

export interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.name} className="border-none">
      <AccordionTrigger
        className={
          "flex items-center pag-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline" +
          (isActive && !isExpanded && " bg-sky-500/10 text-sky-700")
        }
        onClick={() => onExpand(organization.id)}
      >
        <div className="flex gap-x-2 items-center self-start">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization"
              className="rounded-sm object-cover"
            />
          </div>
          <span className=" font-bold text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((router) => (
          <Button
            key={router.href}
            size="sm"
            onClick={() => onClick(router.href)}
            className={
              "w-full font-norma flex justify-start pl-10 mb-1" +
              (pathname === router.href && " bg-sky-500/10 text-sky-700")
            }
            variant={"ghost"}
          >
            {router.icon}
            {router.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
