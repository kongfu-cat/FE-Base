// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。


function isSymmetrical (pRoot) {
    // write code here
    if (pRoot === null) return true
    return isSymmetricalHelper(pRoot.left, pRoot.right)
}
function isSymmetricalHelper (left, right) {
    if (left === null && right === null) return true
    if (left && right && left.val === right.val) {
        // 核心：交换左右节点比较
        return isSymmetricalHelper(left.right, right.left) &&
            isSymmetricalHelper(left.left, right.right)
    }
    return false
}