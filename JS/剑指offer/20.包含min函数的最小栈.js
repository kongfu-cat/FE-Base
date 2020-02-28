/*
    定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
    注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。
*/

/*
    增加了一个辅助栈，每次压入数据栈时，把当前栈里面最小的值压入辅助栈当中。这样辅助栈的栈顶数据一直是数据栈中最小的值。

    data中依次入栈  5, 4, 3, 8, 10, 11, 12, 1
    min 中依次入栈  5, 4, 3, 3,  3,  3,  3, 1
*/
const stack = [], minStack = []
let tmp = null

function push (node) {
    stack.push(node)
    tmp = tmp === null ? node : (tmp > node ? node : tmp)
    minStack.push(tmp)
}
function pop () {
    stack.pop()
    minStack.pop()
}
function top () {
    return stack[stack.length - 1]
}
function min () {
    return minStack[minStack.length - 1]
}