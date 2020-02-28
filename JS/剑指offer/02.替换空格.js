// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。


// 思路是：循环出每个字符，然后比对替换
function replaceSpace (str) {
    // write code here
    return str.replace(/ /g, '%20')
}