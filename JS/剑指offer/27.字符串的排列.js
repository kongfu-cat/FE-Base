// 输入一个字符串, 按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc, 
// 则打印出由字符a, b, c所能排列出来的所有字符串abc, acb, bac, bca, cab和cba。
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

// 递归全排列
function Permutation (str) {
    // write code here
    if (str.length === 1) return [str]

    let chars = str.split(''), res = []
    for (let i = 0; i < chars.length; i++) {
        let strs = Permutation(chars.slice(0, i).concat(chars.slice(i + 1)).join(''))
        res = res.concat(strs.map(str => chars[i] + str))
    }
    return Array.from(new Set(res)) // 去重
}

// 回溯法
// 参考：https://blog.csdn.net/u011582757/article/details/79893137
function Permutation (str) {
    // write code here
    if (str.length === 1) return [str]
    const used = [], res = [], strArr = []
    PermutationHepler(str, used, strArr, res, 1)
    return Array.from(new Set(res))
}

function PermutationHepler (str, used, strArr, res, level) {
    for (let i = 0; i < str.length; i++) {
        if (!used[i]) {
            strArr[level - 1] = str[i]
            used[i] = true
            if (level < str.length) {
                PermutationHepler(str, used, strArr, res, level + 1)
            } else {
                res.push(strArr.join(''))
            }
            used[i] = false
            // 核心：先将用过的锁住，其他递归中的就无法使用，只能找其他的。
            // 递归结束后，恢复。上一层的递归又可以使用其他了，由于i的存在，会移动到上一个使用过的元素的后面
        }
    }
}