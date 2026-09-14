// Problem: Climbing Stairs
// Source: LeetCode #70
// Difficulty: Easy
// Tags: dynamic-programming, fibonacci
//
// Problem Statement:
//   You are climbing a staircase with n steps. Each time you can climb 1 or 2
//   steps. How many distinct ways can you reach the top?
//
// Approach:
//   This is Fibonacci. dp[i] = dp[i-1] + dp[i-2].
//   Use two variables instead of an array for O(1) space.
//
// Time Complexity:  O(n)
// Space Complexity: O(1)

export function climbStairs(n: number): number {
  if (n <= 2) return n;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
