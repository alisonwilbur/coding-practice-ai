import { readFileSync } from "fs";
import { join } from "path";
import { day3 } from "./day3";

describe("day3", () => {
  it("handles 987654321111111", () => {
    expect(day3(["987654321111111"])).toBe(98);
  });

  it("handles 811111111111119", () => {
    expect(day3(["811111111111119"])).toBe(89);
  });

  it("handles 234234234234278", () => {
    expect(day3(["234234234234278"])).toBe(78);
  });

  it("handles 818181911112111", () => {
    expect(day3(["818181911112111"])).toBe(92);
  });

  it("handles 100", () => {
    expect(day3(["100"])).toBe(10);
  });

  it("handles 0001", () => {
    expect(day3(["0001"])).toBe(1);
  });

  it("example from problem", () => {
    expect(day3(["987654321111111", "811111111111119", "234234234234278", "818181911112111"])).toBe(
      357
    );
  });

  it("first line of file", () => {
    expect(
      day3([
        "7455337345554393449454442744452533444624555444444525654744644442462265544584444244243377662874573954",
      ])
    ).toBe(99);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day3input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day3(productRanges)).toBe(17694);
  });
});
