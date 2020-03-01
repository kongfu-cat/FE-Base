// 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。


//Init module if you need
let map = {}
function Init () {
    // write code here
    map = {}
}
//Insert one char from stringstream
function Insert (ch) {
    // write code here
    map[ch] = map[ch] !== undefined ? map[ch] + 1 : 1
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce () {
    // for...in 
    // 先遍历出整数属性（integer properties，按照升序），然后其他属性按照创建时候的顺序遍历出来。
    // ！！ch为整数是，会出现问题
    for (let i in map) {
        if (map[i] === 1) return i
    }
    return '#'
}