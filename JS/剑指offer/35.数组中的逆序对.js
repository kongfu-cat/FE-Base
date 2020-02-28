// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

/*
    在归并排序的过程中 后一个数组的数如小于前一个数组的数，
    则一定能够构成逆序对且逆序对的数目可计算，
    因为待归并的两个数组提前已经归并排序过，
    所以不会出现像前面那样少统计或者多统计的情况出现。

    思路：[A，B]中的逆序对=[A]的逆序对+[B]中的逆序对+将A，B混排在一起的逆序对
*/

let cnt = 0
let tmp = []
function InversePairs (data) {
    // write code here
    MergeSort(data, 0, data.length - 1)
    return cnt % 1000000007
}
function MergeSort (arr, left, right) {
    if (left >= right) return;
    let mid = (right + left) >> 1
    MergeSort(arr, left, mid) // 拆分后，先进行归并排序
    MergeSort(arr, mid + 1, right)
    Merge(arr, left, mid, right)
}
function Merge (arr, left, mid, right) {
    let [s1, s2, index] = [left, mid + 1, left]
    while (s1 <= mid && s2 <= right) {
        if (arr[s1] <= arr[s2]) {
            tmp[index++] = arr[s1++]
        } else {
            cnt += (mid - s1) + 1
            // 左边此位置后的都比右边的大，所以，左边的都比右边的该位置的数大
            tmp[index++] = arr[s2++]
        }
    }
    while (s1 <= mid) tmp[index++] = arr[s1++]
    while (s2 <= right) tmp[index++] = arr[s2++]
    for (let i = left; i <= right; i++) {
        arr[i] = tmp[i]
    }
}