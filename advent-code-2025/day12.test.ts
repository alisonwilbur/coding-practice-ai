import { readFileSync } from "fs";
import { join } from "path";
import { day12 } from "./day12";

// npm run test:watch advent-code-2025/day4b*

describe("day12", () => {
  it("handles 1 line", () => {
    expect(day12(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day12([
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
    const productRanges = readFileSync(join(__dirname, "day12input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day12(productRanges)).toBe(1441);
  });
});
