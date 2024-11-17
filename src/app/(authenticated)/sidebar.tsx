"use client";

import { Sidebar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { HiCreditCard, HiUserGroup } from "react-icons/hi";

const menuItems = [
  {
    href: "/",
    name: "Payroll",
    icon: HiCreditCard,
  },
  {
    href: "/employees",
    name: "Employees",
    icon: HiUserGroup,
  },
];

export default function LayoutSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <Sidebar.Logo href="/" img="/logo.png" imgAlt="Initech">
        Initech
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menuItems.map((menuItem) => (
            <Sidebar.Item
              active={pathname === menuItem.href}
              href={menuItem.href}
              icon={menuItem.icon}
              key={menuItem.name}
            >
              {menuItem.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
