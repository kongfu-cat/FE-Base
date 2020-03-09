// O(n2)
function bubbleSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
}

// 改进
function bubbleSort (arr) {
    let i = arr.length - 1
    while (i > 0) {
        let pos = 0
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j
                // 交换失败
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // 必须这样交换，原因不明
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos
    }
}
// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
bubbleSort(arr)
console.log(arr)

var arr = [2, 1]
bubbleSort(arr)
console.log(arr)