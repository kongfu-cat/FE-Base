// 偏函数【局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数】

// 使用bind()【this指针会有问题】

// 基础版本
function partial (fn, ...args1) {
    return function (...args2) {
        let args = args1.concat(args2)
        return fn.apply(this, args)
    }
}
function add (a, b) {
    return a + b + this.value
}
var obj = {
    value: 10,
    add: (() => { return partial(add, 3) })(),
    add2: (() => { return add.bind(null, 3) })()
}
obj.add(10) // 23
obj.add2(10) // NaN

// 占位符版本
var _ = {}
function partial (fn, ...args1) {
    return function (...args2) {
        let pos = 0, args = []
        for (let i = 0; i < args1.length; i++) {
            args[i] = args1[i] === _ ? args2[pos++] : args1[i]
        }
        while (pos < args2.length) args.push(args2[pos++])
        return fn.apply(this, args)
    }
}
function dec (a, b) {
    return a - b
}
partial(dec, _, 1)(2) // 1