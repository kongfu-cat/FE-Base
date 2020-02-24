// jQuery.each(object, [callback])
// callback(index, item){}

// 参考 https://github.com/mqyqingfeng/Blog/blob/master/articles/%E4%B8%93%E9%A2%98%E7%B3%BB%E5%88%97%E6%96%87%E7%AB%A0/JavaScript%E4%B8%93%E9%A2%98%E4%B9%8BjQuery%E9%80%9A%E7%94%A8%E9%81%8D%E5%8E%86%E6%96%B9%E6%B3%95each%E7%9A%84%E5%AE%9E%E7%8E%B0.md

function each (obj, callback) {
    var isArray = Array.isArray || function () {
        return Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === 'array'
    }
    var isArrayLike = (obj) => {
        var length = !!obj && 'length' in obj && obj.length
        if (typeof obj === 'function' && isWindow(obj)) {
            return false
        }
        return isArray(obj) ||
            length === 0 || // arguments 是类数组，但是length为0
            typeof length === 'number' && length > 0 && (length - 1) in obj // 类似 [,,3]，类数组最后一个元素一定要有【无法写出 [1,,]】
    }

    var length, i = 0
    if (isArrayLike(obj)) {
        length = obj.length
        for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break
            }
        }
    }
}
