// 参考 https://github.com/mqyqingfeng/Blog/issues/28

var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

// 类型判断【核心时 Object.prototype.toString.call】
function type (obj) {
    if (obj == null) {
        return obj + ''
    }
    return typeof obj === 'object' || typeof obj === 'function' ?
        class2type[Object.prototype.toString.call(obj)] || 'object' :
        typeof obj;
}

// 数组判断
var isArray = Array.isArray || function (obj) { return type(obj) === 'array' }

// 空对象判断
function isEmptyObject (obj) {
    var key
    for (key in obj) {
        return false
    }
    return true
}
console.log(isEmptyObject({})); // true
console.log(isEmptyObject([])); // true
console.log(isEmptyObject(null)); // true
console.log(isEmptyObject(undefined)); // true
console.log(isEmptyObject(1)); // true
console.log(isEmptyObject('')); // true
console.log(isEmptyObject(true)); // true

// window对象判断【window对象有一个window属性，指向自身。如果对象有window会误判】
function isWindow (obj) {
    return !!(obj && obj === obj.window) // 使用!!可以确保返回的时true/false
}

// dom节点判断
function isElement (obj) {
    return !!(obj && obj.nodeType === 1)
}

// 类数组判断
function isArrayLike (obj) {
    var length = !!obj && 'length' in obj && obj.length
    var typeRes = type(obj)

    if (typeof obj === 'function' && isWindow(obj)) {
        return false
    }

    return typeRes === 'array' ||
        length === 0 || // arguments 是类数组，但是length为0
        typeof length === 'number' && length > 0 && (length - 1) in obj // 类似 [,,3]，类数组最后一个元素一定要有【无法写出 [1,,]】
}




// 纯粹对象判断
// 所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对
// console.log($.isPlainObject({})) // true
// console.log($.isPlainObject(new Object)) // true
// console.log($.isPlainObject(Object.create(null))); // true
// console.log($.isPlainObject(Object.assign({ a: 1 }, { b: 2 }))); // true
// console.log($.isPlainObject(new Person('yayu'))); // false
// console.log($.isPlainObject(Object.create({}))); // false

function isPlainObject (obj) {
    var toString = Object.prototype.toString;
    var hasOwn = Object.prototype.hasOwnProperty;
    var proto, Ctor;

    // 排除掉明显不是obj的以及一些宿主对象如Window
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    /**
     * getPrototypeOf es5 方法，获取 obj 的原型
     * 以 new Object 创建的对象为例的话
     * obj.__proto__ === Object.prototype
     */
    proto = Object.getPrototypeOf(obj);

    // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
    if (!proto) {
        return true;
    }

    /**
     * 以下判断通过 new Object 方式创建的对象
     * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
     * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
     */
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

    // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
    return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}
