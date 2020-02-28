// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray (array) {
    // 负数，a在左边，b在右边
    // 正数，a在右边，b在左边
    // 0，不变
    return array.concat().sort((a, b) => {
        if (a & 1 && !(b & 1)) return -1
        if (!(a & 1) && b & 1) return 1
        return 0
    })
}

function reOrderArray (array) {
    // oddBegin主要是用作奇数的索引，oddCount是用作偶数的索引,newArray用来存储，以空间换时间，复杂度为O(n)
    let oddBegin = 0,
        oddCount = 0;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] & 1) {
            oddCount++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] & 1) {
            newArray[oddBegin++] = array[i];
        } else {
            newArray[oddCount++] = array[i];
        }
    }
    return newArray;
}