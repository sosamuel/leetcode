/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (64.91%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    14.4K
 * Total Submissions: 22.1K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给定一个二叉树，原地将它展开为链表。
 *
 * 例如，给定二叉树
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 * 将其展开为：
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 *
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  while (root) {
    if (!root.left) {
    } else {
      let prev = root.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }
};
// @lc code=end
