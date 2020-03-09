// Promise
function sleep (wait) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, wait)
    })
}

console.time('sleepPromise')
sleep(1000).then(() => {
    console.timeEnd('sleepPromise')
})

// async
async function sleepAsync (wait) {
    console.time('sleepAsync')
    await sleep(wait)
    console.timeEnd('sleepAsync')
}

// Generator
console.time('sleepGenerator')
function* gen (wait) {
    yield sleep(wait)
}
gen(1000).next().value.then(_ => {
    console.timeEnd('sleepGenerator')
})

// callback
function sleepCallBack (cb, wait) {
    setTimeout(cb, wait)
}
console.time('sleepCB')
sleepCallBack(() => {
    console.timeEnd('sleepCB')
}, 1000)