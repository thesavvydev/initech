import { describe, expect, test } from "vitest";
import groupBy from "./groupBy";

const array = [
  {
    id: 1,
    group: "a",
  },
  {
    id: 2,
    group: "b",
  },
  {
    id: 3,
    group: "a",
  },
  {
    id: 4,
    group: "a",
  },
  {
    id: 5,
    group: "a",
  },
  {
    id: 6,
    group: "b",
  },
];

describe("groupBy", () => {
  test("matches snapshot", () => {
    const result = groupBy(array, (arr) => arr.group);
    expect(result).toMatchSnapshot();
  });

  test("groups array by key selector", () => {
    const result = groupBy(array, (arr) => arr.group);
    expect(result).toMatchObject({
      a: [
        {
          id: 1,
          group: "a",
        },
        {
          id: 3,
          group: "a",
        },
        {
          id: 4,
          group: "a",
        },
        {
          id: 5,
          group: "a",
        },
      ],
      b: [
        {
          id: 2,
          group: "b",
        },
        {
          id: 6,
          group: "b",
        },
      ],
    });
  });
});
