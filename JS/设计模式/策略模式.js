const strategy = {
    A () {
        console.log('A')
    },
    B () {
        console.log('B')
    },
    C () {
        console.log('C')
    }
}

const execStrategy = function (type) {
    strategy[type]()
}

execStrategy('A')