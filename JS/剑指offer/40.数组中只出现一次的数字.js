// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

// 1. HashMap
// 略

// 2. 异或法
function FindNumsAppearOnce (array) {
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let xor = 0
    // 异或：两个相同数字异或=0，一个数和0异或还是它本身。
    for (let item of array) {
        xor ^= item
    }
    let difBit = 1
    // 计算出两个不同数间，差异的最初的位
    while ((difBit & xor) == 0) {
        difBit <<= 1
    }
    let dif1 = 0, dif2 = 0
    for (let item of array) {
        // 继续异或，相同的会被抵消
        if (difBit & item) {
            dif1 ^= item
        } else {
            dif2 ^= item
        }
    }
    return [dif1, dif2]
}