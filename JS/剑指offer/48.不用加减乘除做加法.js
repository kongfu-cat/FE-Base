// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

function Add (num1, num2) {
    // 需要进位部分：111&101=101
    // 不需要进位部分：111^101=010
    let res = 0, carry = 0
    do {
        carry = (num1 & num2) << 1
        res = num1 ^ num2
        num1 = res
        num2 = carry
    } while (carry) // 一直做，知道没有进位
    return res
}