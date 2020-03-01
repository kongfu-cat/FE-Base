function quickSort (arr, left, right) {
    let len = arr.length
    left = left || 0
    right = right || len - 1
    if (left < right) {
        // 分区
        let partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}
function partition (arr, left, right) {
    let pivot = left,
        swapIndex = pivot + 1
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
            swapIndex++
        }
    }
    // 后退一个，确保指向的是一个小于pivot的
    swapIndex--
    [arr[pivot], arr[swapIndex]] = [arr[swapIndex], arr[pivot]]
    return swapIndex
}

// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
quickSort(arr)
console.log(arr)

var arr = [2, 1]
quickSort(arr)
console.log(arr)