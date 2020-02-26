// call 【ES3 提供的】
Function.prototype.call = function (context, ...args) {
    var context = context || window

    context.fn = this
    var result = context.fn(...args)
    // eval('context.fn(' + args +')');

    delete context.fn
    return result
}
// 通过时间戳避免名称重复

// const hash = new Date().getTime(); // 避免名字重复
// context[hash] = this; // 将this缓存，this就是调用call方法的函数

// apply
Function.prototype.apply = function (context, arr) {
    var context = context || window

    context.fn = this
    var result = context.fn(...arr)
    // eval('context.fn(' + args +')');

    delete context.fn
    return result
}

// bind【难点是构造函数使用的判断】
Function.prototype.bind = function (context, ...args1) {
    var fn = this
    return function (...args2) {
        return fn.apply(context, args1.concat(args2))
    }
}
// 改进【this instanceof F ? this判断此时是否是作为构造函数使用】
Function.prototype.bind = function (context, ...args1) {
    var fn = this
    var F = function (...args2) {
        return fn.apply(this instanceof F ? this : context, args1.concat(args2))
    }
    F.prototype = fn.prototype
    return F
}