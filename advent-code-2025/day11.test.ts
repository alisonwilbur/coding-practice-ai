import { readFileSync } from "fs";
import { join } from "path";
import { day11 } from "./day11";

// npm run test:watch advent-code-2025/day4b*

describe("day11", () => {
  it("handles 1 line", () => {
    expect(day11(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day11([
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
    ).toBe(13);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day11input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day11(productRanges)).toBe(1441);
  });
});
