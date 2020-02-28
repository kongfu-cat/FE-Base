// 输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode (pHead1, pHead2) {
    // write code here
    let map = new Map()
    while (pHead1) {
        if (map.get(pHead1) == undefined) map.set(pHead1, 1)
        pHead1 = pHead1.next
    }
    while (pHead2) {
        if (map.get(pHead2) !== undefined) return pHead2
        pHead2 = pHead2.next
    }
    return false
}

// 双指针法
function FindFirstCommonNode (pHead1, pHead2) {
    // write code here
    if (pHead1 === null || pHead2 === null) return null
    let [p1, p2] = [pHead1, pHead2]
    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
        if (p1 !== p2) {
            if (p1 === null) p1 = pHead2
            if (p2 === null) p2 = pHead1
        }
    }
    return p1
}