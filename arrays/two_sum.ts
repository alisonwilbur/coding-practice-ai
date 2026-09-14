// Problem: Two Sum
// Source: LeetCode #1
// Difficulty: Easy
// Tags: array, hash-map
//
// Problem Statement:
//   Given an array of integers `nums` and an integer `target`, return indices
//   of the two numbers that add up to target. Each input has exactly one solution.
//
// Approach:
//   Use a Map to store each number's index as we iterate.
//   For each number, check if (target - num) already exists in the map.
//
// Time Complexity:  O(n)
// Space Complexity: O(n)

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
