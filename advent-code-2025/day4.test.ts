import { readFileSync } from "fs";
import { join } from "path";
import { day4 } from "./day4";

// npm run test:watch advent-code-2025/day4b*

describe("day4", () => {
  it("handles 1 line", () => {
    expect(day4(["..@@.@@@@."])).toBe(6);
  });

  it("handles example", () => {
    expect(
      day4([
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
    const productRanges = readFileSync(join(__dirname, "day4input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day4(productRanges)).toBe(1441);
  });
});
