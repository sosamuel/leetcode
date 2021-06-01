/*
 * @lc app=leetcode.cn id=812 lang=rust
 *
 * [812] 最大三角形面积
 */

// @lc code=start
impl Solution {
    pub fn largest_triangle_area(points: Vec<Vec<i32>>) -> f64 {
        let cur_max_area = 0.0;
        for i in (0..points.len() - 2) {
            for j in (i + 1..points.len() - 1) {
                for k in (j + 1..points.len()) {
                    let cur_area = Solution::area_square(vec![
                        points[i] as Vec<i32>,
                        points[j] as Vec<i32>,
                        points[k] as Vec<i32>,
                    ]);
                    if cur_area > cur_max_area {
                        cur_max_area = cur_area;
                    }
                }
            }
            println!();
        }

        println!("{}", cur_max_area);
        //
        return Solution::area_square(&points);
        //

        // return 0.33; // should be 2;
    }
    pub fn distance(point1: &Vec<i32>, point2: &Vec<i32>) -> f64 {
        let sum = (point1[0] - point2[0]).pow(2) + (point1[1] - point2[1]).pow(2);
        // sum =  f64.fr;
        let x = sum as f64;
        x.sqrt()
    }
    pub fn area_square(points: &Vec<Vec<i32>>) -> f64 {
        let p1 = &points[0];
        let p2 = &points[1];
        let p3 = &points[2];
        let a = Solution::distance(p1, p2);
        let b = Solution::distance(p1, p3);
        let c = Solution::distance(p3, p2);
        let p = (a + b + c) / 2.0;
        (p - a) * (p - b) * (p - c)
    }
}
// @lc code=end
