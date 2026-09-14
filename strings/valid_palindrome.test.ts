import { isPalindrome } from "./valid_palindrome";

describe("isPalindrome", () => {
  it("recognizes a valid palindrome with spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("treats an empty or whitespace-only string as a palindrome", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});
