function joke (arr) {
    let i = 1, res = []
    while (arr.length) {
        if (i % 2) {
            res.push(arr.pop())
        } else {
            arr.unshift(arr.pop())
        }
        i++
    }
    return res
}

function reverse (arr) {
    let i = 1, res = []
    while (arr.length) {
        if (i % 2) {
            res.push(arr.pop())
        } else {
            res.push(res.shift())
        }
        i++
    }
    return res
}
reverse(joke([5, 4, 3, 2, 1]))