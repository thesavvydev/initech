import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LayoutNavbar from "./layout-navbar";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn().mockReturnValue("/employees"),
}));

describe("LayoutNavbar", () => {
  test("renders menu items", () => {
    render(<LayoutNavbar />);

    expect(screen.getByRole("link", { name: "Payroll" })).toHaveProperty(
      "href",
      "http://localhost:3000/"
    );
    expect(screen.getByRole("link", { name: "Employees" })).toHaveProperty(
      "href",
      "http://localhost:3000/employees"
    );
  });
});
