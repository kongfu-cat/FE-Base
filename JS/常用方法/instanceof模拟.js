// 遍历类型的原型链，直到顶端null。与对象的__proto__进行比较

null instanceof Object
// false

function instanceofSim (obj, constructor) {
    let prototype = constructor.prototype
    let left = obj
    while (left) {
        if (left.__proto__ === prototype) return true
        left = left.__proto__
    }
    return false
}


// 测试

class Father {

}
class Son extends Father {

}

father = new Father()
son = new Son()
console.log(instanceofSim(son, Son))// true
console.log(instanceofSim(son, Father))// true
console.log(instanceofSim(father, Son))// false
console.log(instanceofSim(father, Father))// true
console.log(instanceofSim(null, Father))// true



