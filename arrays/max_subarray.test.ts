import { maxSubarray } from "./max_subarray";

describe("maxSubarray", () => {
  it("finds the max subarray sum in a mixed array", () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it("handles a single element", () => {
    expect(maxSubarray([1])).toBe(1);
  });

  it("handles all positive numbers", () => {
    expect(maxSubarray([5, 4, -1, 7, 8])).toBe(23);
  });
});
