/**
 * 需要满足条件
 * 1.Complete Binary Tree : 需要是一颗完全二叉树
 * 2.Parent > Children: 父节点的值一定要大于子节点的值
 */

function heapSort (arr) {
    let size = arr.length
    // 建立最大堆
    for (let i = size >> 1; i >= 0; i--) {
        maxHeapify(arr, size, i)
    }
    // 从最后一个节点开始交换
    for (let i = size - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        // 重新建立最大堆，此时将一个节点去除
        maxHeapify(arr, i, 0)
    }
}

function maxHeapify (arr, size, index) {
    let left = 2 * index + 1,
        right = 2 * index + 2,
        lagrest = index
    // 判定是否符合子节点都小于父节点
    if (left < size && arr[left] > arr[lagrest]) {
        lagrest = left
    }
    if (right < size && arr[right] > arr[lagrest]) {
        lagrest = right
    }
    if (lagrest !== index) {
        [arr[index], arr[lagrest]] = [arr[lagrest], arr[index]]
        // 节点变动了，对变动节点下，所有子节点进行变动
        maxHeapify(arr, size, lagrest)
    }
}

// Test
var arr = [3, 2, 1, 5, 7, 10, 9, 8, 8, 5]
heapSort(arr)
console.log(arr)

var arr = [2, 1]
heapSort(arr)
console.log(arr)