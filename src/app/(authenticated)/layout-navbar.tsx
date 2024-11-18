"use client";

import { Navbar, theme } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { menuItems } from "./menu-items";
import { usePathname } from "next/navigation";

export default function LayoutNavbar() {
  const pathname = usePathname();
  return (
    <Navbar
      fluid
      rounded
      theme={{
        root: { base: twMerge(theme.navbar.root.base, "block lg:hidden") },
      }}
    >
      <Navbar.Brand as={Link} href="/">
        <div className="h-12 relative aspect-square">
          <Image
            alt="Initech"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 48px(max-width: 768px) 48px"
            src="/logo.png"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {menuItems.map((menuItem) => (
          <Navbar.Link
            active={menuItem.isActive(pathname)}
            href={menuItem.href}
            key={menuItem.name}
          >
            {menuItem.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
