// 数组 浅拷贝
var arr = [1, 2, 3]
arr.concat()
arr.slice()

// JSON解析实现深拷贝【无法拷贝函数，循环引用对象会出错】
JSON.parse(JSON.stringify(obj))

// 浅拷贝 数组和对象
function shallowCopy (obj) {
    // 排除基础类型，function，null，undefined【null==undefined // true】
    if (typeof obj !== 'object' || obj == null) return obj;
    var newObj = Array.isArray(obj) ? [] : {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// 深拷贝
function deepCopy (obj) {
    // 排除基础类型，function，null，undefined【null==undefined // true】
    if (typeof obj !== 'object' || obj == null) return obj;
    var newObj = Array.isArray(obj) ? [] : {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key])
        }
    }
    return newObj
}
var oldVal = [{ value: { 0: null, 1: [1, undefined, 3] } }, 1]
var newVal = deepCopy(oldVal)