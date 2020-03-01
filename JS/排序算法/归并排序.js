// 1. 递归版
function mergeSort (arr) {
    if (arr.length <= 1) return arr
    let mid = arr.length >> 1
    // 拆分数组
    return mergeHelper(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function mergeHelper (left, right) {
    // 需要额外空间进行存储
    let res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    // 合并剩余的数组
    return res.concat(left, right)
}

// 2. 非递归版


// Test
console.log(mergeSort([3, 2, 1, 5, 7, 10, 9, 8, 8, 5]))
console.log(mergeSort([2, 1]))