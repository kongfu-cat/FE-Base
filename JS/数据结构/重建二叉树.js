// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{ 1, 2, 4, 7, 3, 5, 6, 8 } 和中序遍历序列{ 4, 7, 2, 1, 5, 3, 8, 6 } ，则重建二叉树并返回。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 递归调用【核心思想是，先找出根节点，然后将中序的左边全部取出，前序中移除根节点后去除对应个数的内容。】
function reConstructBinaryTree (pre, vin) {
    // pre: 3 9 20 15 7
    // vin: 9 3 15 20 7
    let root = pre[0]
    if (root == void 0) {
        return null
    }
    let rootIndex = vin.indexOf(root)
    let leftTreePre = pre.slice(1, 1 + rootIndex), rightTreePre = pre.slice(rootIndex + 1)
    let leftTreeVin = vin.slice(0, rootIndex), rightTreeVin = vin.slice(rootIndex + 1)
    let node = new TreeNode(root)
    node.left = reConstructBinaryTree(leftTreePre, leftTreeVin)
    node.right = reConstructBinaryTree(rightTreePre, rightTreeVin)
    return node
}