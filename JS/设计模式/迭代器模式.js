class Iterator {
    #items = []
    #cur = 0
    constructor(items) {
        this.#items = items
    }
    next () {
        this.#cur += 1
    }
    done () {
        return this.#cur >= this.#items.length
    }
    value () {
        return this.#items[this.#cur]
    }
}

const arr = [1, 2, 3, 4, 5]
const iterator = new Iterator(arr)
console.log(iterator)
while (!iterator.done()) {
    console.log(iterator.value())
    iterator.next()
}