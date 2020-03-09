// DFS
function deepCopy (obj, visited = []) {
    // 排除function，undefined，null，基础类型
    if (typeof obj !== 'object' || obj == undefined) {
        // 处理函数
        if (typeof obj === 'function') {
            return eval('(' + obj.toString() + ')')
        }
        return obj
    }
    let copy = Array.isArray(obj) ? [] : {}
    // 处理循环引用
    let index = visited.indexOf(obj)
    if (!~index) {
        visited.push(obj)
        // symbol属性
        for (let key of [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)]) {
            copy[key] = deepCopy(obj[key], visited)
        }
    } else {
        return obj
    }
    return copy
}

// ====== Test ====== //
let circleObj = {
    foo: {
        name: function () {
            console.log(1)
        },
        bar: {
            name: 'bar',
            baz: {
                name: 'baz',
                aChild: null //待会让它指向obj.foo
            }
        }
    }
}
circleObj.foo.bar.baz.aChild = circleObj.foo
let circleObjCopy = deepCopy(circleObj)
console.log(circleObjCopy)