// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 使用两个stack，分别对奇数层和偶数层进行存储，调换左右节点压栈顺序
function Print (pRoot) {
    // write code here
    if (pRoot === null) return []
    let oddStack = [], evenStack = [], res = []
    let level = 1
    oddStack.push(pRoot)
    while (oddStack.length || evenStack.length) {
        let tmp = []
        // 奇数层 ->
        if (level & 1 === 1) {
            while (oddStack.length) {
                let node = oddStack.pop()
                if (node.left) evenStack.push(node.left)
                if (node.right) evenStack.push(node.right)
                tmp.push(node.val)
            }
        } else {
            // 偶数层 <-
            while (evenStack.length) {
                let node = evenStack.pop()
                if (node.right) oddStack.push(node.right)
                if (node.left) oddStack.push(node.left)
                tmp.push(node.val)
            }
        }
        res.push(tmp)
        level++
    }
    return res
}