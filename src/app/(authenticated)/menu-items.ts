import { HiCreditCard, HiUserGroup } from "react-icons/hi";

export const menuItems = [
  {
    href: "/",
    icon: HiCreditCard,
    isActive: (pathname: string) => pathname === "/",
    name: "Payroll",
  },
  {
    href: "/employees",
    icon: HiUserGroup,
    isActive: (pathname: string) => pathname.startsWith("/employees"),
    name: "Employees",
  },
];
