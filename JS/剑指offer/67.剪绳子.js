/**
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。
 * 请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */


// 1. 递归
function cutRope (number) {
    // write code here
    if (number < 2) return 0
    if (number === 2) return 1
    if (number === 3) return 2
    return cutRopeHelper(number)
}

function cutRopeHelper (number) {
    if (number < 4) return number
    let max = -Infinity
    for (let i = 1; i <= number >> 1; i++) {
        max = Math.max(max, cutRopeHelper(i) * cutRopeHelper(number - i))
    }
    return max
}

// 2. 动态规划

// 3. 贪心【尽量获取3，特殊情况是为 1+3+3 => 2+3+2】
function cutRope (number) {
    // write code here
    if (number < 2) return 0
    if (number === 2) return 1
    if (number === 3) return 2

    let n = number % 3 // 0 1 2
    let m = (number - n) / 3 // pow(3,n)
    if (n === 1) {
        m--
        return Math.pow(2, 2) * Math.pow(3, m)
    }
    return Math.pow(3, m) * n
}