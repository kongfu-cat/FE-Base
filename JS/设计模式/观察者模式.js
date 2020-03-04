// 相对发布者-订阅者是强耦合的

class Observer {
    constructor(fn) {
        this.update = fn
    }
}

class Subject {
    constructor() {
        this.observers = []
    }
    addObserver (observer) {
        this.observers.push(observer)
    }
    removeObservers (observer) {
        const index = this.observers.indexOf(observer)
        if (index) {
            this.observers.splice(index, 1)
        }
    }
    notify () {
        this.observers.forEach(observer => {
            observer.update(0)
        })
    }
}

const subject = new Subject()
const observer1 = new Observer(function () {
    console.log('observer1')
})
const observer2 = new Observer(function () {
    console.log('observer2')
})

subject.addObserver(observer1)
subject.addObserver(observer2)
subject.notify()

subject.removeObservers(observer2)
subject.notify()