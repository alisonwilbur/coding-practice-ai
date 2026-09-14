import { readFileSync } from "fs";
import { join } from "path";
import { day2, day2b } from "./day2";

describe("day2", () => {
  it("range 1-20", () => {
    const productRanges = ["1-20"];
    expect(day2(productRanges)).toBe(11);
  });

  it("range 100-120", () => {
    const productRanges = ["100-120"];
    expect(day2(productRanges)).toBe(0);
  });

  it("range 1 to 50", () => {
    const productRanges = ["1-20", "30-50"];
    expect(day2(productRanges)).toBe(88);
  });

  it("example from problem", () => {
    const productRanges = [
      "11-22",
      "95-115",
      "998-1012",
      "1188511880-1188511890",
      "222220-222224",
      "1698522-1698528",
      "446443-446449",
      "38593856-38593862",
      "565653-565659",
      "824824821-824824827",
      "2121212118-2121212124",
    ];
    expect(day2(productRanges)).toBe(1227775554);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day2input.txt"), "utf-8").trim().split(",");
    // console.log(productRanges);
    expect(day2(productRanges)).toBe(13919717792);
  });
});

describe("day2 part B", () => {
  it("range 1-20", () => {
    const productRanges = ["1-20"];
    expect(day2b(productRanges)).toBe(11);
  });

  it("range 100-120", () => {
    const productRanges = ["100-120"];
    expect(day2b(productRanges)).toBe(111);
  });

  it("range 1000 to 1500", () => {
    // 1010 + 1111 + 1212 + 1313 + 1414 + 1515 = 6060
    const productRanges = ["1000-1500"];
    expect(day2b(productRanges)).toBe(6060);
  });

  it("example from problem", () => {
    const productRanges = [
      "11-22",
      "95-115",
      "998-1012",
      "1188511880-1188511890",
      "222220-222224",
      "1698522-1698528",
      "446443-446449",
      "38593856-38593862",
      "565653-565659",
      "824824821-824824827",
      "2121212118-2121212124",
    ];
    expect(day2b(productRanges)).toBe(4174379265);
  });

  it("from file", () => {
    const productRanges = readFileSync(join(__dirname, "day2input.txt"), "utf-8").trim().split(",");
    // console.log(productRanges);
    expect(day2b(productRanges)).toBe(14582313461);
  });
});
