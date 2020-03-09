function _new (fn, ...args) {
    let obj = Object.create(fn.prototype)
    const res = fn.apply(obj, args)
    return typeof res === 'object' ? res : obj
}

// 不能是class，class必须跟new
function Father (name) {
    this.name = name
}
Father.prototype.hello = function () {
    console.log(this.name + ': hello')
}

let f = _new(Father, 'Tom')
f.hello()