// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 层次遍历【队列】+变量记录下层打印个数+本层剩余打印个数
function Print (pRoot) {
    // write code here
    if (!pRoot) return []
    let queue = [], res = [], tmp = []
    let nextLevelNodes = 0
    let toPrintNodes = 1
    queue.push(pRoot)
    while (queue.length) {
        let node = queue.shift()
        toPrintNodes--
        tmp.push(node.val)

        if (node.left) {
            queue.push(node.left)
            nextLevelNodes++
        }
        if (node.right) {
            queue.push(node.right)
            nextLevelNodes++
        }
        if (toPrintNodes === 0) {
            toPrintNodes = nextLevelNodes
            nextLevelNodes = 0
            res.push(tmp)
            tmp = []
        }
    }
    return res
}