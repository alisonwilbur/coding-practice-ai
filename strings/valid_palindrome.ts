// Problem: Valid Palindrome
// Source: LeetCode #125
// Difficulty: Easy
// Tags: string, two-pointer
//
// Problem Statement:
//   A phrase is a palindrome if, after lowercasing and removing non-alphanumeric
//   characters, it reads the same forward and backward.
//
// Approach:
//   Two-pointer: one from the start, one from the end.
//   Skip non-alphanumeric chars and compare lowercase chars.
//
// Time Complexity:  O(n)
// Space Complexity: O(1)

export function isPalindrome(s: string): boolean {
  const isAlphanumeric = (c: string): boolean => /[a-zA-Z0-9]/.test(c);
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
