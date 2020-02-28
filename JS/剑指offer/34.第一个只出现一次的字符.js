// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

// 通过hash表记录次数
function FirstNotRepeatingChar (str) {
    // write code here
    let map = new Map()
    str.split('').forEach(char => {
        map.get(char) == undefined ? map.set(char, 1) : map.set(char, map.get(char) + 1)
    })
    let index = str.split('').findIndex(char => {
        if (map.get(char) === 1) return true
    })
    return index
}