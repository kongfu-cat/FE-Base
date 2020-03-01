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

// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
bubbleSort(arr)
console.log(arr)

var arr = [2, 1]
bubbleSort(arr)
console.log(arr)