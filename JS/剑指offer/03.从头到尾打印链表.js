/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

// 遍历链表
function printListFromTailToHead (head) {
    // write code here
    let arr = []
    while (head !== null) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}