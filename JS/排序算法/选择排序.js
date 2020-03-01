function selectionSort (arr) {
    let minIndex
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j // 保存后续最小的索引
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
selectionSort(arr)
console.log(arr)

var arr = [2, 1]
selectionSort(arr)
console.log(arr)