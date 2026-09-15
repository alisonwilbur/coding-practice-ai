import { readFileSync } from "fs";
import { join } from "path";
import { day5, day5b } from "./day5";

// npm run test:watch advent-code-2025/day5*

describe("day5", () => {
  // it("day5 handles example", () => {
  //   expect(day5(["3-5", "10-14", "16-20", "12-18", "", "1", "5", "8", "11", "17", "32"])).toBe(3);
  // });

  // it("day5 from file", () => {
  //   const productRanges = readFileSync(join(__dirname, "day5input.txt"), "utf-8")
  //     .trim()
  //     .split("\n");
  //   expect(day5(productRanges)).toBe(698);
  // });

  it("day5b handles example", () => {
    expect(day5b(["3-5", "10-14", "16-20", "12-18"])).toBe(14);
  });

  it("day5b handle duplicates", () => {
    expect(day5b(["3-5", "10-14", "16-20", "10-14", "12-18"])).toBe(14);
  });

  it("day5b handle unsorted duplicates", () => {
    expect(day5b(["12-13", "1-8", "1-6", "1-4", "1-5", "2-5"])).toBe(10);
  });

  it("day5b handle non-ranges", () => {
    expect(day5b(["3-3", "5-5"])).toBe(2);
  });

  it("day5b handle overlaps", () => {
    expect(day5b(["3-8", "1-5"])).toBe(8);
  });

  it("day5b handle inside", () => {
    expect(day5b(["3-8", "3-5", "6-10"])).toBe(8);
  });

  it("day5b handle overlap at end", () => {
    expect(day5b(["1-3", "2-5", "7-9", "8-10"])).toBe(9);
  });

  it("day5b handle overlap at end", () => {
    expect(day5b(["1-5", "4-8", "11-16", "12-19"])).toBe(17);
  });

  it("day5b handle more overlaps", () => {
    expect(day5b(["3-5", "10-14", "16-20", "10-14", "12-18", "16-17", "3-4", "17-24"])).toBe(18);
  });

  it("day5b from file", () => {
    const rows = readFileSync(join(__dirname, "day5input.txt"), "utf-8").trim().split("\n");

    const separatorIndex = rows.indexOf("");
    console.log("separatorIndex", separatorIndex);
    rows.splice(separatorIndex);

    expect(day5b(rows)).toBe(352807801032167);
  });
});
