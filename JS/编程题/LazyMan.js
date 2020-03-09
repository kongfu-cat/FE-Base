
// 任务队列+异步

class LazyManClass {
    constructor(name) {
        this.tasks = []
        this.name = name
        console.log(`Hi I am ${this.name}`)
        Promise.resolve().then(() => {
            this.next()
        })
    }
    eat (name) {
        let job = _ => new Promise(resolve => {
            resolve()
        }).then(_ => {
            console.log(`I am eating ${name}`)
            this.next()
        })
        this.tasks.push(job)
        return this
    }
    sleepFirst (time) {
        let job = _ => new Promise(resolve => {
            setTimeout(resolve, time * 1000)
        }).then(_ => {
            console.log(`等待了${time}秒`)
            this.next()
        })
        this.tasks.unshift(job)
        return this
    }
    sleep (time) {
        let job = _ => new Promise(resolve => {
            setTimeout(resolve, time * 1000)
        }).then(_ => {
            console.log(`等待了${time}秒`)
            this.next()
        })
        this.tasks.push(job)
        return this
    }
    next () {
        let job = this.tasks.shift()
        job && job()
    }
}

function LazyMan (name) {
    return new LazyManClass(name);
}


LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food