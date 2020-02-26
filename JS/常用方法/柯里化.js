// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

// 参数复用。本质上是降低通用性，提高适用性。

// ES5【由于是输入数组，如果初始时就传参会有点问题。改进是全部使用arguments】curry(add,1,2,3)
function curry (fn, args = []) {
    return fn.length === args.length ? fn.apply(this, args) : function () {
        return curry(fn, args.concat([].slice.call(arguments)))
    }
}

// ES6
function curry (fn, ...args) {
    return fn.length === args.length ? fn.apply(this, args) : (...args2) => { return curry(fn, ...args.concat(args2)) }
}

function add (a, b, c) {
    return a + b + c
}

curry(add)(1)(2)(3) // 6

// 带占位符的，柯里化+偏函数混合应用
var _ = {}
function curry (fn, ...args1) {
    // 减去参数中的 _
    let length = args1.reduce((acc, cur) => { return acc - (cur === _) }, args1.length)
    return fn.length === length ? fn.apply(this, args1) : (...args2) => {
        let args = [], pos = 0
        for (let i = 0; i < args1.length; i++) {
            args[i] = args1[i] === _ ? (args2[pos] ? args2[pos++] : _) : args1[i]
        }
        while (pos < args2.length) args.push(args2[pos++]);
        return curry(fn, ...args)
    }
}
function func (a, b, c) {
    console.log(`${a}-${b}-${c}`)
}
curry(func)(1, _, 3)(2) // 1-2-3
curry(func, 1, _, _)(2, 3)

export { curry, _ }