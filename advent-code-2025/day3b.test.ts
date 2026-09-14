import { readFileSync } from "fs";
import { join } from "path";
import { day3b } from "./day3b";

describe("day3b", () => {
  it("handles 987654321111111", () => {
    expect(day3b(["987654321111111"])).toBe(987654321111);
  });

  it("handles 811111111111119", () => {
    expect(day3b(["811111111111119"])).toBe(811111111119);
  });

  it("handles 234234234234278", () => {
    expect(day3b(["234234234234278"])).toBe(434234234278);
  });

  it("handles 818181911112111", () => {
    expect(day3b(["818181911112111"])).toBe(888911112111);
  });

  // it("first line of file", () => {
  //   expect(
  //     day3b([
  //       "7455337345554393449454442744452533444624555444444525654744644442462265544584444244243377662874573954",
  //     ])
  //   ).toBe(99);
  // });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day3input.txt"), "utf-8")
      .trim()
      .split("\n");
    expect(day3b(productRanges)).toBe(175659236361660);
  });
});
