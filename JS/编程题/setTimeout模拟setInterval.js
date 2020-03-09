function mySetInterval (fn, wait, ...args) {
    mySetInterval.timer = setTimeout(() => {
        fn()
        mySetInterval(fn, wait, ...args)
    }, wait, ...args)
}

mySetInterval.clear = function () {
    clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
    console.log
}, 1000, 'TEST')

setTimeout(() => {
    // 5s 后清理
    mySetInterval.clear()
}, 5000)