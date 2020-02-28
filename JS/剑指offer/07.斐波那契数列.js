// 递归式
function Fibonacci (n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2)
}

// 动态规划【最优子结构、无后效性、子问题重叠】
function Fibonacci (n) {
    // left => f(0)
    // right => f(1)
    let left = 0, right = 1
    while (n--) {
        right += left // f(n+1)
        left = right - left // f(n)
    }
    return left
}