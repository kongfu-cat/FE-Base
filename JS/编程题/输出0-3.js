for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('var ' + i);
    }, 0)

    // 绑定参数
    setTimeout(console.log, 0, i)

    setTimeout(console.log.bind(null, i), 0)
}

// let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('let ' + i);
    }, 0)
}

for (var i = 0; i < 3; i++) {
    // 闭包
    (function (j) {
        setTimeout(() => {
            console.log('closure ' + j);
        }, 0)
    })(i)

    setTimeout((i => {
        console.log('IIFE ' + i);
    })(i), 0)

    // try/catch
    try {
        throw i
    } catch (j) {
        setTimeout(() => {
            console.log('try/catch ' + j);
        }, 0)
    }
    // eval / new Function
    setTimeout(new Function('console.log("Func ' + i + '")'), 0)
}