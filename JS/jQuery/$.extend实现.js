// 浅拷贝版本

function extend (src, ...args) {
    args.forEach(obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 因为for in 出来的key包括原型里的。通过hasOwnProperty判断是否自身含有【可以使用Object.keys()替代】
                src[key] = obj[key]
            }
        }
    })
}
var val = {}
extend(val, { a: 123, b: [1, 2, 3] }, { a: 1, c: 321 })


// 深拷贝版本
