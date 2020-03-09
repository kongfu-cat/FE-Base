Number.prototype.add = function (n) {
    const bigIntAdd = (_ => {
        if (typeof BigInt === 'function') {
            return function (m, n) { return BigInt(n) + BigInt(m) }
        }
        return function (n, m) {
            let a = m.toString().split(''), b = n.toString().split(''), tmp = 0, res = ''
            while (a.length || b.length || tmp) {
                tmp += ~~a.pop() + ~~b.pop()
                res = (tmp % 10) + res
                tmp = tmp > 9
            }
            return res.replace(/^0+/, '')
        }
    })()
    if (this.valueOf() + n > Number.MAX_SAFE_INTEGER) {
        return bigIntAdd(this.valueOf(), n)
    }
    return this.valueOf() + n
}
Number.prototype.minus = function (n) {
    return this.valueOf() - n
}

console.log((5).add(5).minus(2))