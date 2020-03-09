function minus (a, b) {
    a = a.toString().split('')
    b = b.toString().split('')
    let res = '', tmp = 0
    while (a.length || b.length) {
        tmp = ~~a.pop() - ~~b.pop()
        if (tmp < 0 && ~~a[a.length - 1] > 0) {
            tmp += 10
            a[a.length - 1] = a[a.length - 1] - 1
        }
        res = tmp + res
    }
    return res.replace(/^0+$/, '')
}

console.log(minus(1, 2))
console.log(minus(2, 2))
console.log(minus(2, 1))
console.log(minus(10, 2))
console.log(minus(2, 10))
console.log(minus(12000, 12222))
console.log(minus(12222, 12000))