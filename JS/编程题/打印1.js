var a = {
    i: 1,
    valueOf () {
        console.log('valueOf') // 优先
        return this.i++
    },
    toString () {
        console.log('toString')
        return this.i++
    }
};
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}