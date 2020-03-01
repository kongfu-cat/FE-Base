// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。


// 插入排序，确保有序
let arr = []
function Insert (num) {
    // write code here
    arr.push(num)
    for (let i = arr.length - 2; arr[i] > num; i--) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
}
function GetMedian () {
    // write code here
    let len = arr.length, mid
    if (len & 1 === 1) {
        mid = arr[len >> 1]
    } else {
        mid = (arr[len >> 1] + arr[(len >> 1) - 1]) / 2
    }
    return mid
}