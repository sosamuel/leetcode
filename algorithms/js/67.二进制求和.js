/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.95%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    38.1K
 * Total Submissions: 75.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let addFlag = 0,
    len = Math.max(a.length, b.length),
    sum = "";
  a = a.padStart(len, 0);
  b = b.padStart(len, 0);
  while (len) {
    let tmp = +a[len - 1] + +b[len - 1] + addFlag;
    sum = (tmp & 1) + sum;
    addFlag = tmp >> 1;
    len--;
  }
  addFlag & 1 && (sum = "1" + sum);
  return sum;
};
