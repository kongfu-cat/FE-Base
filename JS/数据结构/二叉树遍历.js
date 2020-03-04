import { Deserialize } from './序列化二叉树'

const root = Deserialize("!8!6!5!#!#!7!#!#!10!9!#!#!11!#!#")

// 先序遍历【递归】
function preOrder (root) {
    let res = []
    function preOrderHelper (root) {
        if (!root) return null
        res.push(root.val)
        preOrderHelper(root.left)
        preOrderHelper(root.right)
    }
    preOrderHelper(root)
    return res
}
// 先序遍历【非递归】
function preOrder (root) {
    if (!root) return []
    let res = [], stack = []
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return res
}
console.log(preOrder(root))


// 中序遍历【递归】
function inOrder (root) {
    let res = []
    function inOrderHelper (root) {
        if (!root) return null
        inOrderHelper(root.left)
        res.push(root.val)
        inOrderHelper(root.right)
    }
    inOrderHelper(root)
    return res
}
// 中序遍历【非递归】
function inOrder (root) {
    if (!root) return []
    let res = [], stack = [], cur = root
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
}
console.log(inOrder(root))

// 后序遍历【递归】
function postOrder (root) {
    let res = []
    function postOrderHelper (root) {
        if (!root) return null
        postOrderHelper(root.left)
        postOrderHelper(root.right)
        res.push(root.val)
    }
    postOrderHelper(root)
    return res
}
// 后序遍历【非递归】
function postOrder (root) {
    if (!root) return []
    let res = [], stack = []
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
        res.unshift(node.val)
    }
    return res
}
console.log(postOrder(root))

// 层次遍历
function levelOrder (root) {
    if (!root) return []
    let res = [], queue = []
    queue.push(root)
    while (queue.length) {
        let node = queue.shift()
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        res.push(node.val)
    }
    return res
}
console.log(levelOrder(root))