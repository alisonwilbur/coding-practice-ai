import { readFileSync } from "fs";
import { join } from "path";
import { day5 } from "./day5";

// npm run test:watch advent-code-2025/day5*

describe("day5", () => {
  it("handles example", () => {
    expect(day5(["3-5", "10-14", "16-20", "12-18", "", "1", "5", "8", "11", "17", "32"])).toBe(3);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day5input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day5(productRanges)).toBe(698);
  });
});
