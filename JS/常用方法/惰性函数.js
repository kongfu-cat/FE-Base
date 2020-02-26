// 惰性函数【内部对函数进行了重写】
// 只需要判断一次，接下来的使用方式都不会发生改变的时候

// 单例模式
function foo () {
    var t = new Date()
    foo = () => t
    return foo()
}

foo()

// 通过闭包
var addEvent = (function () {
    if (window.addEventListener) {
        return function (type, el, fn) {
            el.addEventListener(type, fn, false);
        }
    }
    else if (window.attachEvent) {
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
})();