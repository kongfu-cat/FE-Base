/*
    请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 \begin{bmatrix} a & b & c &e \\ s & f & c & s \\ a & d & e& e\\ \end{bmatrix}\quad
    矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
*/


// 回溯法
function hasPath (matrix, rows, cols, path) {
    // write code here
    let used = new Array(rows * cols)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (hasPathHelper(matrix, rows, cols, i, j, used, path, 0))
                return true
        }
    }
    return false
}

function hasPathHelper (matrix, rows, cols, row, col, used, path, pathLen) {
    let res = false
    if (pathLen === path.length) return true
    if (row >= 0 && row < rows && col >= 0 && col < cols && !used[row * cols + col]) {
        if (matrix[row * cols + col] === path[pathLen]) {
            pathLen++
            used[row * cols + col] = true
            res = hasPathHelper(matrix, rows, cols, row + 1, col, used, path, pathLen) ||
                hasPathHelper(matrix, rows, cols, row - 1, col, used, path, pathLen) ||
                hasPathHelper(matrix, rows, cols, row, col + 1, used, path, pathLen) ||
                hasPathHelper(matrix, rows, cols, row, col - 1, used, path, pathLen)
            if (!res) {
                pathLen--
                used[row * cols + col] = false
            }
        }
    }
    return res
}