function shellSort (arr) {
    for (let gap = arr.length >> 1; gap > 0; gap = gap >> 1) {
        for (let i = gap; i < arr.length; i++) {
            let index = i
            let current = arr[i]
            while (index - gap >= 0 && current < arr[index - gap]) {
                arr[index] = arr[index - gap]
                index = index - gap
            }
            arr[index] = current
        }
    }
}

function shellSort (arr) {
    const len = arr.length;
    for (let fraction = len >> 1; fraction > 0; fraction = fraction >> 1) {
        // fraction为希尔排序中的增量
        for (let i = fraction; i < len; i++) {
            for (let j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
                [arr[j], arr[fraction + j]] = [arr[fraction + j], arr[j]]; // 交换间隔为增量的两个数
            }
        }
    }
}


// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
shellSort(arr)
console.log(arr)

var arr = [2, 1]
shellSort(arr)
console.log(arr)