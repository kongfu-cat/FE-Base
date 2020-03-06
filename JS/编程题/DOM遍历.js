function DFS (node) {
    let nodes = []
    if (node !== null) {
        nodes.push(node)
        for (let child of node.children) {
            nodes = nodes.concat(DFS(child))
        }
    }
    return nodes
}

// 非递归
function DFS (node) {
    let nodes = [], stack = []
    if (node !== null) {
        stack.push(node)
        while (stack.length) {
            let node = stack.pop()
            let children = node.children
            nodes.push(node)
            for (let j = children.length - 1; j >= 0; j--) {
                stack.push(children[j])
            }
        }
    }
    return nodes
}

function WFS (node) {
    let nodes = [], queue = []
    if (node !== null) {
        queue.push(node)
        while (queue.length) {
            let node = queue.shift()

            nodes.push(node)
            for (let child of node.children) {
                queue.push(child)
            }
        }
    }
    return nodes
}
var res = WFS(document.getElementById('node'))
res.forEach(node => console.log(node.className))