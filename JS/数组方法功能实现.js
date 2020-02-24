// 使用reduce实现map
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


// flat 扁平化数组
[1, 2, [3, 4]].flat() // ES6，默认只会“拉平”一层；不管有多少层嵌套，如果都要转成一维数组，可以用 Infinity 关键字作为参数
// [1, 2, 3, 4]
// [1, 2, [3, 4]].flat(Infinity)

const flatten = arr => {
    return arr.reduce((acc, cur, i, arr) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
flatten([1, 2, [3, 4], [[5, 6], 7]])