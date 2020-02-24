// 自定义事件，使用观察者模式

class EventEmitter {
    constructor() {
        this._events = {}
    }
    on (event, handler) {
        this._events[event] ? this._events[event].push(handler) : this._events[event] = [handler]
    }
    emit (event, ...args) {
        this._events[event] && this._events[event].forEach(handler => { handler(...args) })
    }
    off (event) {
        delete this._events[event]
    }
    once (event, handler) {
        this.on(event, (...args) => {
            handler(...args)
            this.off(event)
        })
    }
}