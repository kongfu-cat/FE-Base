// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同

// 二叉搜索树特点：节点左边树都小于等于根节点，右边都大于等于根节点

// 递归版
function VerifySquenceOfBST (sequence) {
    function isBST (seq, r, l) {
        let side = l // 用来查找边界
        if (r >= l) return true
        while (seq[side] >= seq[l]) side--
        for (let j = side; j >= 0; j--) {
            if (seq[j] > seq[l]) return false
        }
        return isBST(seq, 0, side) && isBST(seq, side + 1, l - 1)
    }

    if (!sequence.length) return false
    return isBST(sequence, 0, sequence.length - 1)
}

// 非递归版
// 核心：按照构成规则，走一遍序列，符合则可以走完，否则不符合
function VerifySquenceOfBST (sequence) {
    let n = sequence.length
    if (!n) return false
    while (n--) {
        let i = 0
        while (sequence[i] <= sequence[n]) i++
        while (sequence[i] >= sequence[n]) i++
        if (i < n) return false
    }
    return true
}