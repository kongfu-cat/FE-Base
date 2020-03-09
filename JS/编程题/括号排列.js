function ps (n) {
    let res = []
    psHelper(n, n, '', res)
    return res
}
function psHelper (left, right, str = '', res) {
    if (left == 0 && right == 0) {
        res.push(str)
    }
    if (left > 0) {
        psHelper(left - 1, right, str + '(', res)
    }
    if (right > 0 && right > left) {
        psHelper(left, right - 1, str + ')', res)
    }
}
ps(1); //["()"]
ps(2);//["(())","()()"]


// 卡特兰数