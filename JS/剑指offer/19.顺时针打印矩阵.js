/*
   输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
   例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
*/

// 核心：rows > round * 2 && cols > round * 2
function printMatrix (matrix) {
    if (matrix === null) return null
    let res = [],
        round = 0,
        rows = matrix.length,
        cols = matrix[0].length
    while (rows > round * 2 && cols > round * 2) {
        res = res.concat(printMatrixCricle(matrix, rows, cols, round))
        round++
    }
    return res
}
function printMatrixCricle (matrix, rows, cols, round) {
    let res = [],
        startX = round,
        startY = round,
        endX = cols - round - 1,
        endY = rows - round - 1
    // right
    for (let i = startX; i <= endX; i++) {
        res.push(matrix[startY][i])
    }
    // down
    for (let i = startY + 1; i <= endY; i++) {
        res.push(matrix[i][endX])
    }
    // left
    for (let i = endX - 1; i >= startX && endY > startY; i--) {
        res.push(matrix[endY][i])
    }
    // up
    for (let i = endY - 1; i > startY && endX > startX; i--) {
        res.push(matrix[i][startY])
    }
    return res
}

/*
    模拟魔方逆时针解法
    
    例如
        1 2 3
        4 5 6
        7 8 9
    输出并删除第一行后，再进行一次逆时针旋转，就变成：
        6 9
        5 8
        4 7
    继续重复上述操作即可
*/
function printMatrix (matrix) {
    // write code here
    let res = []
    res = res.concat(matrix.shift())
    while (matrix.length) {
        matrix = rotateMatrix(matrix)
        res = res.concat(matrix.shift())
    }
    return res
}

function rotateMatrix (matrix) {
    let res = [],
        rows = matrix.length,
        cols = matrix[0].length
    // 一维数组
    if (cols === undefined) return matrix
    for (let i = cols - 1; i >= 0; i--) {
        let row = []
        for (let j = 0; j < rows; j++) {
            row.push(matrix[j][i])
        }
        res.push(row)
    }
    return res
}