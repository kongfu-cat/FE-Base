//输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

// 双指针，此时相距最远，乘积最小
function FindNumbersWithSum (array, sum) {
    // write code here
    if (array.length < 2) return []
    let [left, right] = [0, array.length - 1]
    let res = []
    while (left < right) {
        if (array[left] + array[right] < sum) {
            left++
        } else if (array[left] + array[right] > sum) {
            right--
        } else {
            res.push(array[left], array[right])
            break
        }
    }
    return res
}