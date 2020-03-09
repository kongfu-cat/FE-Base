const intersect = (a, b) => {
    const result = [];
    const map = a.reduce((obj, item) => {
        obj[item] ? obj[item]++ : obj[item] = 1;
        return obj;
    }, {});
    b.forEach(item => {
        if (map[item] && map[item] > 0) {
            result.push(item);
            map[item]--
        }
    })
    return result
}

console.log(intersect([1, 2, 2, 3, 4], [2, 1, 2]))