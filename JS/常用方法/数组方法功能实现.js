/* --------------- 使用reduce实现map --------------- */
Array.prototype.map = function (cb) {
    return this.reduce(function (acc, cur, i, arr) {
        acc.push(cb(cur, i, arr))
        return acc
    }, [])
}
function callback (cur, i, arr) {
    return cur * cur
}

arr = [1, 2, 3, 4]
console.log(arr.map(callback))










/* --------------- flat 扁平化数组 --------------- */
[1, 2, [3, 4]].flat() // ES6，默认只会“拉平”一层；不管有多少层嵌套，如果都要转成一维数组，可以用 Infinity 关键字作为参数
// [1, 2, 3, 4]
// [1, 2, [3, 4]].flat(Infinity)

const flatten = arr => {
    return arr.reduce((acc, cur, i, arr) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
flatten([1, 2, [3, 4], [[5, 6], 7]])










/* --------------- 数值比较 --------------- */
var arr = [6, 4, 1, 8, 2, 11, 23];

// 升序最后一个
arr.sort(function (a, b) { return a - b; })
arr[arr.length - 1]

// reduce
arr.reduce(function (acc, cur) { return Math.max(acc, cur); });










/* --------------- 去重 --------------- */

// 使用indexOf，一层循环

// 两层循环，进行比较【兼容性最好】

// ES6 Set
var arr = [1, [1, 3], 3, [1, 3], 4, arr, 6, arr, null, null, NaN, NaN, undefined, undefined]
var set = new Set(arr)
Array.from(set)
// [1, [1, 3], 3, [1, 3], 4, arr, 6]
// 数组字面量的依旧存在，使用变量引用的被消除了

var unique = (a) => [...new Set(a)]

// ES6 Map / Object进行存储键值对
function unique (arr) {
    const seen = new Map()
    // return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
    // 同Set的问题

    // return arr.filter((a) => !seen.has(JSON.stringify(a)) && seen.set(JSON.stringify(a), 1))
    // 通过JSON.stringify(a)解决，但 JSON.stringify(NaN) // "null"  JSON.stringify(null) // "null"

    return arr.filter((a) => !seen.has(typeof a + JSON.stringify(a)) && seen.set(typeof a + JSON.stringify(a), 1))
}
unique(arr)






