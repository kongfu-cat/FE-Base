// jsonp

// 缓存代理
const mult = function (...args) {
    let res = 1
    for (let item of args) {
        res *= item
    }
    return res
}

const proxyMult = (function () {
    const cache = {}
    return function (...args) {
        if (cache[JSON.stringify(args)] == undefined) {
            console.log(`save mult(${args}) to cache`)
            cache[JSON.stringify(args)] = mult(...args)
        }
        return cache[JSON.stringify(args)]
    }
})()

console.log(proxyMult(1, 2, 3, 4, 5))
console.log(proxyMult(1, 2, 3, 4, 5))