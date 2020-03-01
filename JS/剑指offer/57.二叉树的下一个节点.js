// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

// 1. 还原二叉树，然后中序遍历
function GetNext (pNode) {
    // write code here
    if (!pNode) return null
    let root = pNode
    while (root.next) {
        root = root.next
    }
    let res = LDR(root)
    let index = res.indexOf(pNode)
    return index == res.length - 1 ? null : res[index + 1]
}

function LDR_R (root) { // 递归版
    let res = []
    if (root) {
        res = res.concat(LDR_R(root.left))
        res.push(root)
        res = res.concat(LDR_R(root.right))
    }
    return res
}

function LDR (root) {
    let stack = [], res = []
    let cur = root
    while (cur !== null || stack.length) {
        if (cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur)
            cur = cur.right
        }
    }
    return res
}


// 2. 根据条件直接找
/*
    有右子树，下一结点是右子树中的最左结点
    无右子树，且结点是该结点父结点的左子树，则下一结点是该结点的父结点
    无右子树，且结点是该结点父结点的右子树，则我们一直沿着父结点追朔，直到找到某个结点是其父结点的左子树，如果存在这样的结点，那么这个结点的父结点就是我们要找的下一结点
*/
function GetNext (pNode) {
    // write code here
    if (pNode === null) return null
    if (pNode.right !== null) {
        pNode = pNode.right
        while (pNode.left !== null) {
            pNode = pNode.left
        }
        return pNode
    }
    if (pNode.next && pNode === pNode.next.left) return pNode.next
    while (pNode.next !== null) {
        if (pNode.next.left === pNode) {
            return pNode.next
        }
        pNode = pNode.next
    }
    return null
}