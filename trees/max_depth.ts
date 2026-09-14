// Problem: Maximum Depth of Binary Tree
// Source: LeetCode #104
// Difficulty: Easy
// Tags: tree, dfs, recursion
//
// Problem Statement:
//   Given the root of a binary tree, return its maximum depth — the number of
//   nodes along the longest path from root to a leaf.
//
// Approach:
//   Recursive DFS: depth = 1 + max(left depth, right depth).
//   Base case: null has depth 0.
//
// Time Complexity:  O(n)
// Space Complexity: O(h) where h is the height of the tree

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
