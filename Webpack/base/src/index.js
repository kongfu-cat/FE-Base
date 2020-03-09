class Hello {
    constructor(name) {
        this.name = name
    }
    hello () {
        console.log(`hello ${this.name}`)
    }
}

const h = new Hello('world')
h.hello()

const add = (a, b) => a + b

const isHas = [1, 2, 3].includes(2)