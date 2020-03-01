// 求1 + 2 + 3 +...+n，要求不能使用乘除法、for、while、if、else 、switch、case等关键字及条件判断语句（A ? B : C）。

// 递归
function Sum_Solution (n) {
    // write code here
    // n*(n+1)/2
    return n && Sum_Solution(n - 1) + n
}

// 二进制运算实现乘法