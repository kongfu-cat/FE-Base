
instance = null
class Singleton {
    constructor() {
        if (instance == null) {
            instance = this
        }
        return instance
    }
}

const item1 = new Singleton()
const item2 = new Singleton()
console.log(item1 === item2)
