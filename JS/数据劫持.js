// Object.defineProperty【无法监听到数组的变化，不支持嵌套的】
// 参考：http://www.fly63.com/article/detial/4072

// 当被监听的属性是数组，这几个方法push、pop、shift、unshift、splice、sort、reverse不会触发set。vue将这几个修改原始的数组的方法称为变异方法
var obj = {}
var prop = ''
Object.defineProperty(obj, 'prop', {
    set: function (val) {
        console.log('setter')
        prop = val
    },
    get: function () {
        console.log('getter')
        // 这样相当于对this.prop进行读取，会导致递归调用
        // return this.prop
        return prop
    }
})

// 遍历每个属性
Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
        //....
    })
})

// ES6 Proxy 【监听数组的问题，避免重写数组方法。不支持嵌套的】
// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
var obj = {}
let handler = {
    get (target, key, receiver) {
        console.log('get', key)
        // 递归创建并返回【针对嵌套对象属性】
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        // 使用Reflect【不是一个构造函数，拦截 JavaScript 操作的方法，不触发代理handler。针对target可能也是一个Proxy的情况】
        return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
        console.log('set', key, value)
        return Reflect.set(target, key, value, receiver)
    }
}
let proxy = new Proxy(obj, handler)


// ES6 class setter/getter
class Obj {
    constructor(prop) {
        this.prop = prop
    }
    set prop (val) {
        console.log('setter')
        this._prop = val
    }
    get prop () {
        console.log('getter')
        return this._prop
    }
}
var obj = new Obj()