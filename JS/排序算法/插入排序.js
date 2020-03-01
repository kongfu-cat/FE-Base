function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        cur = i
        // 与前面的数进行比较
        while (arr[cur] < arr[cur - 1]) {
            [arr[cur], arr[cur - 1]] = [arr[cur - 1], arr[cur]]
            cur = cur - 1
        }
    }
}

// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
insertionSort(arr)
console.log(arr)

var arr = [2, 1]
insertionSort(arr)
console.log(arr)