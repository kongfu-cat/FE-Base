/*
    输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
    假设压入栈的所有数字均不相等。
    例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
    （注意：这两个序列的长度是相等的）
*/

// 核心，通过helpStack模拟入栈的过程，同时进行与出栈队列进行比对，确认是否符合
function IsPopOrder (pushV, popV) {
    // write code here
    let helpStack = [], flag = false
    while (pushV.length || helpStack.length) {
        while (helpStack.length && helpStack[helpStack.length - 1] === popV[0]) {
            popV.shift()
            helpStack.pop()
        }
        if (!popV.length) flag = true
        if (!pushV.length) break
        helpStack.push(pushV.shift())
    }
    return flag
}