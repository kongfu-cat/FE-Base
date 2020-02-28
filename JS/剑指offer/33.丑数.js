// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。


// 动态规划
function GetUglyNumber_Solution (index) {
    // write code here
    let res = [], p2 = 0, p3 = 0, p5 = 0
    if (!index) return 0
    res[0] = 1
    for (let i = 1; i < index; i++) {
        res[i] = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5)
        if (res[i] === res[p2] * 2) p2++
        if (res[i] === res[p3] * 3) p3++
        if (res[i] === res[p5] * 5) p5++
    }
    return res[index - 1]
}