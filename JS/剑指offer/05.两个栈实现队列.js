// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 1.一个栈专门用来接收输入的，一个专门用来接收输出的
const outStack = [],
    inStack = [];
function push (node) {
    // write code here
    inStack.push(node);
}
function pop () {
    // 【核心：第一次全部输入到outStack，outStack用完了，再从inStack中获取。确保元素顺序】
    if (!outStack.length) {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}

// 2.一个用来存储，一个用来临时颠倒
let queueStack = [], tmpStack = []
function push (node) {
    // write code here
    queueStack.push(node)
}
function pop () {
    // write code here
    let res
    while (queueStack.length > 1) {
        tmpStack.push(queueStack.pop())
    }
    res = queueStack.pop()
    while (tmpStack.length) {
        queueStack.push(tmpStack.pop())
    }
    return res
}