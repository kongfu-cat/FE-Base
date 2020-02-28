
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示

// 1.移位计算，n&flag;flag=flag<<1;
function NumberOf1 (n) {
    // 正数的原码、反码、补码是一致的；
    // 负数的补码是反码加1，反码是对原码按位取反，只是最高位(符号位)不变；
    let flag = 1, cnt = 0
    while (flag) {
        n & flag && cnt++
        flag = flag << 1
    }
    return cnt
}


// 2.判断 n=n&n-1，多少次变为0
/*
    如1100&1011=1000.
    也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.
    那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。
*/
function NumberOf1 (n) {
    let cnt = 0
    while (n) {
        n = n & n - 1
        cnt++
    }
    return cnt
}