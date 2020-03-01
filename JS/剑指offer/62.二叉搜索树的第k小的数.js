// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 中序遍历+计数
function KthNode (pRoot, k) {
    // write code here
    if (!pRoot || k <= 0) return null
    let stack = []
    let cur = pRoot
    while (cur !== null || stack.length) {
        if (cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (--k === 0) return cur
            cur = cur.right
        }
    }
    return null
}