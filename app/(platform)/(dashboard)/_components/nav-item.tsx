"use client";

import { AccordionItem } from "@/components/ui/accordion";

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
  return <AccordionItem value={organization.name}></AccordionItem>;
};
