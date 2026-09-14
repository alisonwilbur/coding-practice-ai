import { readFileSync } from "fs";
import { join } from "path";
import { day6 } from "./day6";

// npm run test:watch advent-code-2025/day4b*

describe("day6", () => {
  it("handles 1 line", () => {
    expect(day6(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day6([
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
    const productRanges = readFileSync(join(__dirname, "day6input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day6(productRanges)).toBe(1441);
  });
});
