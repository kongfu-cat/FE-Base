// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/*
1. 两个指针slow、fast，从头节点开始，每次分别前进1步、2步。如存在环，则两者相遇；
2. 碰撞点p肯定是在环中的，从这个结点出发，一边移动一边计数，再次回到这个结点时就得到了环中结点数n
3. 碰撞点p到连接点的距离=头节点到连接点的距离，因此，分别从碰撞点、头节点相同速度开始走，相遇的那个点就是连接点。
o o o o o
    o   o
    o o o
*/
// 快慢指针+碰撞点p到连接点的距离=头节点到连接点的距离
function EntryNodeOfLoop (pHead) {
    // write code here
    let fast = pHead, slow = pHead
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            let connect = pHead
            while (connect !== slow) {
                connect = connect.next
                slow = slow.next
            }
            return connect
        }
    }
    return null
}