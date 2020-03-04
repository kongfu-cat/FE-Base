function IsBalanced_Solution (pRoot) {
    // write code here
    return TreeDepth(pRoot) >= 0
}
function TreeDepth (root) {
    if (!root) return 0
    let leftDep = TreeDepth(root.left)
    // 通过直接返回-1，避免多余的计算
    if (leftDep === -1) return -1
    let rightDep = TreeDepth(root.right)
    if (rightDep === -1) return -1
    return Math.abs(leftDep - rightDep) > 1 ? -1 : Math.max(leftDep, rightDep) + 1
}