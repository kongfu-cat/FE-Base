// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 暴力法
function Find (target, array) {
    for (let row of array) {
        for (let col of row) {
            if (col === target) return true
        }
    }
    return false

    // return array.reduce((rowRes, row) => {
    //     return rowRes || !!row.reduce((colRes, col) => {
    //         return colRes || col === target
    //     }, false)
    // }, false)

    // return (array.flat(1 / 0)).indexOf(target) !== -1
}

// 根据特点，从左下角开始比较，target大的话向右边走，小的话向上走
function Find (target, array) {
    // write code here
    // 1,2,3,4
    // 2,3,4,5
    // 3,4,5,6
    const m = array.length, n = array[0].length
    let row = m - 1, col = 0
    while (row >= 0 && col <= n - 1) {
        if (array[row][col] < target) {
            col++
        } else if (array[row][col] > target) {
            row--
        } else return true
    }
    return false
}