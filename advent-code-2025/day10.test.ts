import { readFileSync } from "fs";
import { join } from "path";
import { day10 } from "./day10";

// npm run test:watch advent-code-2025/day4b*

describe("day10", () => {
  it("handles 1 line", () => {
    expect(day10(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day10([
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
    const productRanges = readFileSync(join(__dirname, "day10input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day10(productRanges)).toBe(1441);
  });
});
