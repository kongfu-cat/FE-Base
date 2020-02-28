/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/

/*
    双指针法
    两个指针来跑，两个指针中间相距k - 1个节点, 第一个指针先跑，跑到了第k个节点时，第二个指针则是第一个节点。
    这时候两个一起跑。当第一个跑到了最后一个节点时，这时候第一个指针则是倒数第k个节点。
*/
function FindKthToTail (head, k) {
    if (head == null || k < 0) return null
    let p1 = head, p2 = head
    while (--k) {
        if (p1.next !== null) {
            p1 = p1.next
        } else {
            return null
        }
    }
    while (p1.next !== null) {
        p1 = p1.next
        p2 = p2.next
    }
    return p2
}

// 先计算长度，然后再次查找，对应的顺序节点
function FindKthToTail (head, k) {
    let linkLen = 0, p = head, index
    while (p) {
        p = p.next
        linkLen++
    }
    p = head
    index = linkLen - k
    while (p && index--) {
        p = p.next
    }
    return p
}