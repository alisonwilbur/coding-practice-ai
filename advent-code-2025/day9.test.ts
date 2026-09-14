import { readFileSync } from "fs";
import { join } from "path";
import { day9 } from "./day9";

// npm run test:watch advent-code-2025/day4b*

describe("day9", () => {
  it("handles 1 line", () => {
    expect(day9(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day9([
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
    const productRanges = readFileSync(join(__dirname, "day9input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day9(productRanges)).toBe(1441);
  });
});
