/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge (pHead1, pHead2) {
    let merageHead = null
    if (pHead1 === null) return pHead2
    if (pHead2 === null) return pHead1
    if (pHead1.val < pHead2.val) {
        merageHead = pHead1
        merageHead.next = Merge(pHead1.next, pHead2)
    } else {
        merageHead = pHead2
        merageHead.next = Merge(pHead1, pHead2.next)
    }
    return merageHead
}