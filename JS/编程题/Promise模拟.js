class MyPromise {
    constructor(fn) {
        this.state = 'PENDING';
        this.value = null
        this.resolvedCallbacks = []
        this.rejectedCallbacks = []
        const resolve = value => {
            if (this.state === 'PENDING') {
                this.state = 'RESOLVED'
                this.value = value
                this.resolvedCallbacks.map(cb => cb())
            }
        }
        const reject = value => {
            if (this.state === 'PENDING') {
                this.state = 'REJECTED'
                this.value = value
                this.rejectedCallbacks.map(cb => cb())
            }
        }
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then (onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
        onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
        if (this.state === 'PENDING') {
            this.resolvedCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.rejectedCallbacks.push(() => {
                onRejected(this.value)
            })
        }
        if (this.state === 'RESOLVED') {
            onFulfilled(this.value)
        }
        if (this.state === 'REJECTED') {
            onRejected(this.value)
        }
    }

    catch (fn) {
        return this.then(null, fn);
    }

    static resolve (val) {
        return new MyPromise(resolve => {
            resolve(val);
        })
    }

    static reject (err) {
        return new MyPromise((resolve, reject) => {
            reject(err);
        })
    }

    static race (promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        })
    }

    static all (promises) {
        const arr = [];
        let i = 0;
        function processData (index, data, resolve) {
            arr[index] = data;
            i++;
            if (i === promises.length) {
                resolve(arr);
            }
        }
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(data => {
                    processData(i, data, resolve);
                }, reject);
            }
        })
    }
    static finally (fn) {
        let p = this.constructor
        return this.then(
            value => { p.resolve(fn()).then(() => value) },
            reason => { p.resolve(fn()).then(() => { throw reason }) }
        )
    }
}
