// new
// 创建空对象，将对象作为构造函数的this，执行构造函数，修改对象的__proto__属性，返回对象

function newSimulate (constructor, ...args) {
    let obj = {}
    obj.__proto__ = constructor.prototype
    let ret = constructor.apply(obj, args)
    return typeof ret === 'object' ? ret : obj
}

