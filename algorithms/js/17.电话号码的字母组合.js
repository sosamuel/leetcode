/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (50.50%)
 * Likes:    419
 * Dislikes: 0
 * Total Accepted:    38.4K
 * Total Submissions: 76K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const hash = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
function dfs(str, i, curAns, ans) {
  if (i == str.length) {
    ans.push(curAns);
    return;
  }
  hash[str[i]].forEach((char) => {
    dfs(str, i + 1, curAns + char, ans);
  });
}

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const ans = [];
  dfs(digits, 0, "", ans);
  return ans;
};
