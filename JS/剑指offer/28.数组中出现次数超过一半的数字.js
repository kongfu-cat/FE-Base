/*
    数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
    例如输入一个长度为9的数组{ 1, 2, 3, 2, 2, 2, 5, 4, 2 } 。
    由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
    如果不存在则输出0。
*/

// 1. 遍历
function MoreThanHalfNum_Solution (numbers) {
    // write code here
    let halfLen = numbers.length / 2, map = new Map()
    let res = numbers.find((item) => {
        let cnt = map.get(item) != undefined ? map.get(item) : 0
        cnt++
        map.set(item, cnt)
        if (cnt > halfLen) return true
    })
    return res !== undefined ? res : 0
}

// 2. 通过计数【核心：超出一半的一定会出最后的值，通过相异-=，相同+=，来抵消不同的。】
