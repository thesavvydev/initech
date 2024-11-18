import { describe, expect, test } from "vitest";
import toDateInputValue from "./toDateInputValue";

describe("toDateInputValue", () => {
  test("matches snapshot", () => {
    const result = toDateInputValue(new Date());
    expect(result).toMatchSnapshot();
  });

  test("returns input ready date format", () => {
    const result = toDateInputValue(new Date(2024, 10, 18));
    expect(result).toBe("2024-11-18");
  });
});
