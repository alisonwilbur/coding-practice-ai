import { readFileSync } from "fs";
import { join } from "path";
import { day7 } from "./day7";

// npm run test:watch advent-code-2025/day4b*

describe("day7", () => {
  it("handles 1 line", () => {
    expect(day7(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day7([
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
    const productRanges = readFileSync(join(__dirname, "day7input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day7(productRanges)).toBe(1441);
  });
});
