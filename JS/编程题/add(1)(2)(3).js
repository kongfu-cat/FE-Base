function add (...args1) {
    let fn = function (...args2) {
        return add.apply(this, args1.concat(args2))
    }
    // 核心
    fn.toString = function () {
        return args1.reduce((acc, cur) => acc + cur, 0)
    }
    return fn
}

console.log(add(1)(2))
console.log(add(1)(2)(3))