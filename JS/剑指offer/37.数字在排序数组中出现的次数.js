// 统计一个数字在排序数组中出现的次数。

// 1. 二分法，一个查找开始位置，一个查找结束位置
function GetNumberOfK (data, k) {
    // write code here
    let start = getStart(data, k),
        end = getEnd(data, k)
    if (start === -1) return 0
    return end - start + 1
}
function getStart (data, k) {
    let [left, right] = [0, data.length - 1]
    let mid
    while (left <= right) {
        mid = (left + right) >> 1
        if (data[mid] < k) {
            left = mid + 1
        } else if (data[mid] > k) {
            right = mid - 1
        } else if (data[mid] === k && data[mid - 1] !== k) {
            return mid
        } else {
            // 核心：判断左边是否还存在k，存在则向左继续查找
            right = mid - 1
        }
    }
    return -1
}
function getEnd (data, k) {
    let [left, right] = [0, data.length - 1]
    let mid
    while (left <= right) {
        mid = (left + right) >> 1
        if (data[mid] < k) {
            left = mid + 1
        } else if (data[mid] > k) {
            right = mid - 1
        } else if (data[mid] === k && data[mid + 1] !== k) {
            return mid
        } else {
            // 核心：判断右边是否还存在k，存在则向右继续查找
            left = mid + 1
        }
    }
    return -1
}