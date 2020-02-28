/* 
    输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
    路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
    (注意: 在返回值的list中，数组长度大的数组靠前)
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 非递归版本【深度遍历，栈，记录下每条路径】
function FindPath (root, expectNumber) {
    // write code here
    let stack = [], res = [], path = []
    if (!root) return res
    stack.push([root, [root.val]])
    while (stack.length) {
        let [node, path] = stack.pop()
        if (node.left === null &&
            node.right === null &&
            path.reduce((acc, cur) => acc + cur) === expectNumber) {
            res.push(path)
        }
        if (node.right !== null) stack.push([node.right, path.concat(node.right.val)])
        if (node.left !== null) stack.push([node.left, path.concat(node.left.val)])
    }
    return res
}