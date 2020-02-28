// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 保证base和exponent不同时为0

function Power (base, exponent) {
    // 快速幂
    let r = 1, n = Math.abs(exponent)
    while (n) {
        if (n & 1) r *= base
        base *= base
        n >>= 1 // 核心
    }
    return exponent < 0 ? 1 / r : r
}