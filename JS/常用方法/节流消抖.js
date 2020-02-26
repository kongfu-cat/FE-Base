// 消抖，每次点击后如果没有达到定时器间隔时间，那么会重置定时器【参考 javascript高级程序设计，点击后边延迟执行】
// 在事件停止触发后n秒执行
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

// 1. 时间戳比较方式节流
// 事件会立刻执行，事件停止触发后没有办法再执行事件
function throttle (fn, time, ...args) {
    var prev = 0
    return function () {
        var now = +new Date()
        if (now - prev > time) {
            fn.apply(this, args)
            prev = now
        }
    }
}
setInterval(throttle(function () { console.log('throttle') }), 100);

// 2. 定时器方式
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
