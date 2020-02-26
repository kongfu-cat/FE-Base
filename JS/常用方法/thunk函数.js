// Thunk 函数替换的不是表达式，而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数
// co 库

// http://www.ruanyifeng.com/blog/2015/05/thunk.html

function thunk (fn) {
    return function (...args) {
        // 使用function，不用箭头函数，避免this被固定
        return function (callback) {
            return fn.apply(this, args.concat(callback))
        }
    }
}

// 配合Generator使用，实现自动执行 
// yield 命令后面的必须是 Thunk 函数

function hello (cb) { typeof cb === 'function' && cb(); console.log('hello') }
var helloThunk = thunk(hello)
function* gen () {
    yield helloThunk()
    console.log('1')
    yield helloThunk()
    console.log('2')
    yield helloThunk()
    console.log('3')
}

function run (fn) {
    var gen = fn();
    function next (err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}

run(gen)

