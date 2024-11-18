import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EmployeeCards from "./employee-cards";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn().mockReturnValue("/employees"),
}));

const employees = [
  {
    id: 1,
    firstName: "Peter",
    lastName: "Gibbons",
    department: "Engineering",
    dateStarted: "1997-03-13T00:00:00.000Z",
    quote: "Peter quote",
    status: "active",
    avatarUrl: "https://thispersondoesnotexist.com/image",
  },
  {
    id: 2,
    firstName: "Samir",
    lastName: "Nagheenanajar",
    department: "Engineering",
    dateStarted: "1998-06-25T00:00:00.000Z",
    quote: "Samir quote",
    status: "active",
    avatarUrl: "https://thispersondoesnotexist.com/image",
  },
];

describe("EmployeeCards", () => {
  test("renders department header", () => {
    render(<EmployeeCards department="Engineering" employees={[]} />);

    expect(screen.getByRole("heading", { name: "Engineering" })).toBeDefined();
  });

  test("renders employee cards", () => {
    render(<EmployeeCards department="Engineering" employees={employees} />);

    expect(screen.getByRole("link", { name: "Peter Gibbons" })).toHaveProperty(
      "href",
      `http://localhost:3000/employees/1/edit`
    );
    expect(screen.getByText("PG")).toBeDefined();
    expect(screen.getByText("Peter Gibbons")).toBeDefined();
    expect(screen.getByText("Started Mar 12, 1997")).toBeDefined();
    expect(screen.getByText("Peter quote")).toBeDefined();

    expect(
      screen.getByRole("link", { name: "Samir Nagheenanajar" })
    ).toHaveProperty("href", `http://localhost:3000/employees/2/edit`);
    expect(screen.getByText("SN")).toBeDefined();
    expect(screen.getByText("Samir Nagheenanajar")).toBeDefined();
    expect(screen.getByText("Started Jun 24, 1998")).toBeDefined();
    expect(screen.getByText("Samir quote")).toBeDefined();
  });
});
