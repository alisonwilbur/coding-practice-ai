import { readFileSync } from "fs";
import { join } from "path";
import { day8 } from "./day8";

// npm run test:watch advent-code-2025/day4b*

describe("day8", () => {
  it("handles 1 line", () => {
    expect(day8(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day8([
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
    const productRanges = readFileSync(join(__dirname, "day8input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day8(productRanges)).toBe(1441);
  });
});
