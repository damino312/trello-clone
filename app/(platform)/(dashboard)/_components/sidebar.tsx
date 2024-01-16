"use client";

import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { organizations } from "@clerk/nextjs/api";
import { NavItem, Organization } from "./nav-item";
import { useState } from "react";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  // const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
  //   storageKey,
  //   {}
  // ); // не используй т.к. он не удаляет значение из локал стореджа и работает все из за этого неправильно
  const [expanded, setExpanded] = useState<Record<string, any>>({});

  const { organization: activeOrg, isLoaded: isLoadedOrg } = useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  // превращает в нормальный массив для передачи в аккордион
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  console.log(expanded);

  return (
    <>
      <div className=" font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button size="sm" className=" ml-auto">
          <Link href={"/select-org"}>+</Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          ></NavItem>
        ))}
      </Accordion>
    </>
  );
};
