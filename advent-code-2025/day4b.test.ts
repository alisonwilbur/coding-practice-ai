import { readFileSync } from "fs";
import { join } from "path";
import { day4b } from "./day4b";

// npm run test:watch advent-code-2025/day4b*

describe("day4b", () => {
  it("handles example", () => {
    expect(
      day4b([
        "..@@.@@@@.",
        "@@@.@.@.@@",
        "@@@@@.@.@@",
        "@.@@@@..@.",
        "@@.@@@@.@@",
        ".@@@@@@@.@",
        ".@.@.@.@@@",
        "@.@@@.@@@@",
        ".@@@@@@@@.",
        "@.@.@@@.@.",
      ])
    ).toBe(43);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day4input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day4b(productRanges)).toBe(9050);
  });
});
