// compose【pointfree，指的是函数无须提及将要操作的数据是什么样的】
import { curry } from './柯里化'

function compose (...funcs) {
    return function (...args) {
        let i = funcs.length - 1
        let result = funcs[i--].apply(this, args)
        while (i >= 0) result = funcs[i--].call(this, result)
        return result
    }
}
function add (x) {
    return x + 10
}
function mult (x) {
    return x * 10
}
compose(add, mult)(10)


// kevin daisy kelly => K.D.K
var toUpperCase = x => x.toUpperCase()
var head = x => x.slice(0, 1)
var split = curry((separator, str) => { return str.split(separator) })
var join = curry((separator, arr) => { return arr.join(separator) })
var map = curry((fn, arr) => { return arr.map(fn) })

var initials = compose(join('.'), map(compose(head, toUpperCase)), split(' '))
initials("kevin daisy kelly")
