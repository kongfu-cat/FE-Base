function flatObj (obj, parentKey = '', result = {}) {
    for (let key of Object.keys(obj)) {
        let keyName = parentKey + key
        if (Object.prototype.toString.call(obj[key]) == '[object Object]') {
            flatObj(obj[key], keyName + '.', result)
        } else {
            result[keyName] = obj[key]
        }
    }
    return result
}

var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
console.log(flatObj(entry))


function unflatObj (obj, result = {}) {
    for (let key of Object.keys(obj)) {
        key.split('.').reduce((acc, cur, i, arr) => {
            if (i === arr.length - 1) {
                acc[cur] = obj[key]
                return
            }
            acc[cur] = acc[cur] || {}
            return acc[cur]
        }, result)
    }
    return result
}

var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}
console.log(unflatObj(entry))