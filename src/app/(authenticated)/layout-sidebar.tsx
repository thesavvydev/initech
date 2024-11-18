"use client";

import { Sidebar, theme } from "flowbite-react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { menuItems } from "./menu-items";

export default function LayoutSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar
      theme={{
        root: {
          base: twMerge(
            theme.sidebar.root.base,
            "sticky top-0 shrink-0 h-screen hidden lg:block"
          ),
          inner: twMerge(theme.sidebar.root.inner, "bg-white"),
        },
      }}
    >
      <Sidebar.Logo href="/" img="/logo.png" imgAlt="Initech">
        Initech
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menuItems.map((menuItem) => (
            <Sidebar.Item
              active={menuItem.isActive(pathname)}
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
