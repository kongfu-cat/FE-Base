// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0

function StrToInt (str) {
    let flag = 1, val = 0
    if (str.length < 1) return 0
    if (str[0] == '-') flag = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '+' || str[i] == '-') continue
        if (str[i] < '0' || str[i] > '9') return 0
        // 一定要括号，运行顺序
        val = (val << 1) + (val << 3) + (str[i] - '0')
    }
    val = flag * val
    // 溢出检测0x7FFFFFFF,-0x80000000
    if (val > 2147483647 || val < -2147483648) return 0
    return val
}