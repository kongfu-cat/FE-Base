// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 递归
function deleteDuplication (pHead) {
    // write code here
    if (!pHead) return null
    if (!pHead.next) return pHead
    if (pHead.val === pHead.next.val) {
        let p = pHead
        while (p && p.val === pHead.val) {
            p = p.next
        }
        // 剔除相同后的链表节点
        return deleteDuplication(p)
    } else {
        // 修复next
        pHead.next = deleteDuplication(pHead.next)
        return pHead
    }
}