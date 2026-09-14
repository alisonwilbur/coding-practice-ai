import { climbStairs } from "./climbing_stairs";

describe("climbStairs", () => {
  it("returns 1 way for 1 step", () => {
    expect(climbStairs(1)).toBe(1);
  });

  it("returns 2 ways for 2 steps", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("returns 3 ways for 3 steps", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("returns 8 ways for 5 steps", () => {
    expect(climbStairs(5)).toBe(8);
  });
});
