
/*
    输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
    返回结果为复制后复杂链表的head。
    （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
*/
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/

// 1. map(n, n')，特点：先创建出全部节点的拷贝，并通过n来作为key，然后进行修复
function Clone (pHead) {
    // write code here
    if (pHead == null) return null

    let map = new Map()
    p = pHead
    while (p) {
        map.set(p, new RandomListNode(p.label))
        p = p.next
    }
    p = pHead
    while (p) {
        let node = map.get(p)
        node.next = map.get(p.next)
        node.random = map.get(p.random)
        p = p.next
    }
    return map.get(pHead)
}



// 2. 链表节点后边插入一个新节点，然后修复节点，最后拆出节点
// n->n'->s->s' => n'->s' 【位置信息不会丢失】

function Clone (pHead) {
    cloneNodes(pHead);
    connectRandom(pHead);
    return reconnectNodes(pHead);
}
function cloneNodes (pHead) {
    // 复制链表
    let pNode = pHead;
    while (pNode !== null) {
        const newNode = new RandomListNode(pNode.label);
        newNode.next = pNode.next;
        pNode.next = newNode;
        pNode = newNode.next;
    }
}
function connectRandom (pHead) {
    // 设置random指针
    let pNode = pHead;
    while (pNode !== null) {
        if (pNode.random !== null) {
            pNode.next.random = pNode.random.next;
        }
        pNode = pNode.next.next;
    }
}
function reconnectNodes (pHead) {
    // 拆开链表
    let pNode = pHead;
    let newNodeHead = null,
        newNode = null;
    if (pNode !== null) {
        newNodeHead = newNode = pNode.next;
        pNode.next = newNode.next;
        pNode = newNode.next;
    }
    while (pNode !== null) {
        newNode.next = pNode.next;
        newNode = newNode.next;
        pNode.next = newNode.next;
        pNode = pNode.next;
    }
    return newNodeHead;
}