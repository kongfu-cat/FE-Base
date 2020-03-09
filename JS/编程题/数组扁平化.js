var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
var arrNew = Array.from(new Set(arr.flat('Infinity'))).sort((a, b) => a - b)
console.log(arrNew)

function flat (arr) {
    let res = []
    arr.forEach(item => {
        res = res.concat(Array.isArray(item) ? flat(item) : item)
    })
    return res
}

function unique (arr) {
    let map = new Map(), res = []
    arr.forEach(item => {
        if (map.get(item) === undefined) {
            map.set(item, true)
            res.push(item)
        }
    })
    return res
}
console.log(flat(arr))
console.log(unique(flat(arr)))