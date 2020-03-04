// 发布-订阅模式或消息机制，定义了一种依赖关系，解决了主体对象与观察者之间功能的耦合。

class EventBus {
    constructor() {
        this.events = Object.create(null)
    }
    on (event, cb) {
        this.events[event] = this.events[event] || []
        this.events[event].push(cb)
    }
    fire (event) {
        this.events[event].forEach(cb => cb())
    }
    off (event, cb) {
        const index = (this.events[event] || []).indexOf(cb)
        if (index) {
            this.events[event].splice(index, 1)
        }
    }
    once (event, cb) {
        this.on(event, () => {
            cb()
            this.off(event, cb)
        })
    }
}


const bus = new EventBus()
bus.on('click', function () {
    console.log('clicked')
})
bus.fire('click')
bus.off('click')
bus.fire('click')

bus.once('once', function () {
    console.log('once')
})
bus.fire('once')
bus.fire('once')