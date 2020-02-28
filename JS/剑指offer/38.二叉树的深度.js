// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 1. 深度遍历树
function TreeDepth (pRoot) {
    // write code here
    if (!pRoot) return 0
    let stack = [], maxDeep = 0
    stack.push([pRoot, 0])
    while (stack.length) {
        let [node, deep] = stack.pop()
        deep++
        if (node.right !== null) stack.push([node.right, deep])
        if (node.left !== null) stack.push([node.left, deep])
        maxDeep = Math.max(deep, maxDeep)
    }
    return maxDeep
}

// 2. 递归
function TreeDepth (pRoot) {
    // write code here
    if (!pRoot) return 0
    let leftDeep = TreeDepth(pRoot.left)
    let rightDeep = TreeDepth(pRoot.right)
    return Math.max(leftDeep, rightDeep) + 1
}