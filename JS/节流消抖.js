// 消抖，每次点击后如果没有达到定时器间隔时间，那么会重置定时器【参考 javascript高级程序设计，点击后边延迟执行】
function debounce (fn, time, ...args) {
    var tId = null
    return function () {
        // 重置计数器
        tId && clearTimeout(tId)
        tId = setTimeout(() => {
            fn.call(this, ...args)
        }, time || 500);
    }
}

setInterval(() => {
    debounce(function () { console.log('debounce') }, this)
}, 100);


// 节流【一定间隔内仅会执行一次】
function throttle (fn, time, ...args) {
    var runFlag = false
    return function () {
        if (runFlag) return false
        runFlag = true
        setTimeout(() => {
            fn.call(this, ...args)
            runFlag = false
        }, time || 500);
    }
}
setInterval(throttle(function () { console.log('throttle') }), 100);