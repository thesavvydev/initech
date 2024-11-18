import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LayoutSidebar from "./layout-navbar";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn().mockReturnValue("/employees"),
}));

describe("LayoutSidebar", () => {
  test("renders menu items", () => {
    render(<LayoutSidebar />);

    expect(screen.getByRole("link", { name: "Payroll" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Employees" })).toBeDefined();
  });
});
