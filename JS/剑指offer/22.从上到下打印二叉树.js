/* 
    从上往下打印出二叉树的每个节点，同层节点从左至右打印。

    从下打印就是按层次打印，其实也就是树的广度遍历。
    一般来说树的广度遍历用队列，利用先进先出的特点来保存之前节点，并操作之前的节点。
    树的深度遍历一般来说用栈或者递归，利用先进后出的特点来保存之前节点，把之前的节点留到后面操作。
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom (root) {
    // write code here
    let res = [], queue = []
    if (!root) return res;
    queue.push(root)
    while (queue.length) {
        let node = queue.shift()
        if (node.left !== null) queue.push(node.left)
        if (node.right !== null) queue.push(node.right)
        res.push(node.val)
    }
    return res
}