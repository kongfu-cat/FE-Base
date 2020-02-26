// 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。

function memorize (fn, hasher) {
    let memoize = function (...args) {
        let key = '' + (typeof hasher === 'function' ? hasher.apply(this, args) : args.join(','))
        let cache = memoize.cache
        if (!cache[key]) {
            return cache[key] = fn.apply(this, args)
        }
        return cache[key]
    }
    memoize.cache = {}
    return memoize
}

function hasher () {
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
}

// 斐波那契数列

var count = 0
var fibonacci = function (x) {
    count++
    // return x < 2 ? x : arguments.callee(x - 1) + arguments.callee(x - 2) // 453
    return x < 2 ? x : fibonacci(x - 1) + fibonacci(x - 2) // 12
}


count = 0
for (let i = 0; i <= 10; i++) {
    fibonacci(i)
}
console.log(count)

fibonacci = memorize(fibonacci) // 相当于调整了递归内部 的fibonacci函数

count = 0
for (let i = 0; i <= 10; i++) {
    fibonacci(i)
}
console.log(count)

