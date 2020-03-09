const zeroMove = (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}


function zeroMove (arr) {
    let index = 0;
    for (let i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === 0) {
            index++;
        } else if (index !== 0) {
            arr[i - index] = arr[i];
            arr[i] = 0;
        }
        console.log(i, index, arr)
    }
    return arr;
}
console.log(zeroMove([0, 1, 0, 0, 3, 12]))