import { maxDepth, TreeNode } from "./max_depth";

describe("maxDepth", () => {
  it("returns correct depth for a multi-level tree", () => {
    //     3
    //    / \
    //   9  20
    //     /  \
    //    15   7
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(maxDepth(root)).toBe(3);
  });

  it("returns 1 for a single node", () => {
    expect(maxDepth(new TreeNode(1))).toBe(1);
  });

  it("returns 0 for an empty tree", () => {
    expect(maxDepth(null)).toBe(0);
  });
});
