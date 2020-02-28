// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 非递归方式【先中序遍历，保存节点，此时时有序的，然后修改指针】
function Convert (pRootOfTree) {
    // write code here
    if (pRootOfTree == null) return pRootOfTree

    let stack = [], cur = pRootOfTree, nodes = []
    while (cur !== null || stack.length) {
        if (cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            nodes.push(cur)
            cur = cur.right
        }
    }
    nodes[0].left = null
    nodes[nodes.length - 1].right = null
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].right = nodes[i + 1]
        nodes[i + 1].left = nodes[i]
    }
    return nodes[0]
}