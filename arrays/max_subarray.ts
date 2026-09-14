// Problem: Maximum Subarray (Kadane's Algorithm)
// Source: LeetCode #53
// Difficulty: Medium
// Tags: array, dynamic-programming, kadane
//
// Problem Statement:
//   Given an integer array, find the contiguous subarray with the largest sum
//   and return its sum.
//
// Approach:
//   Kadane's Algorithm: track the running sum and global max.
//   At each element, decide whether to extend the subarray or start fresh.
//
// Time Complexity:  O(n)
// Space Complexity: O(1)

export function maxSubarray(nums: number[]): number {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}
