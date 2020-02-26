/* ------------------ 创建 ------------------ */

// 工厂模式【无法使用intanceof判断】
function FactoryObj () {
    return {}
}

// 构造函数【每次都要创建属性】
function ConstructorObj (prop) {
    this.prop = prop
}
new ConstructorObj('prop')

// 原型模式【操作原型对象，共享了引用型变量】
function PrototypeObj () {
}
PrototypeObj.prototype = {
    constructor: PrototypeObj, // 修复构造函数指向
    prop: 'prop',
    func: function () { console.log('hello') }
}

// 组合构造函数与原型模式【方法共享，变量每个都有各自的副本】
function CombinationObj (prop) {
    this.prop = prop
}
CombinationObj.prototype = {
    constructor: CombinationObj, // 修复构造函数指向
    prop: 'prop',
    func: function () { console.log('hello') }
}

// 动态原型【根据原型方法是否存在添加原型，都在构造函数中生成】

// 寄生构造函数模式【不能依赖 instanceof 操作符来确定对象类型，构造函数返回值替代了new出来的对象】

// 稳妥构造函数模式【安全，TS中可以使用安全修饰符】

/* ------------------ 继承 ------------------ */

// 原型链【修改原型链指向，共享引用属性，无法设置父类的参数】
function Father (prop) {
    this.prop = prop
}
Father.prototype = {
    constructor: Father,
    func: function () { console.log('father') }
}
function Son (name) {
    this.name = name
}
Son.prototype = new Father()
Son.prototype.constructor = Son

// 构造函数【属性都有副本，但通过Son2.prototype获取Father的信息】
function Son2 (name, prop) {
    Father.call(this, prop)
    this.name = name
}
Son2.prototype.constructor = Son2


// 组合【可以通过Son3.prototype获取Father的信息】
function Son3 (name, prop) {
    Father.call(this, prop)
    this.name = name
}
Son3.prototype = new Father()
Son3.prototype.constructor = Son3

// 原型式【进行浅复制，ECMAScript 5 通过新增 Object.create() 方法规范化了原型式继承】
function Son4 (father) {
    function F () { }
    F.prototype = father
    F.prototype.constructor = arguments.callee
    return new F()
}

// 寄生组合【加入了一个中间对象，避免了在 SubType.prototype 上面创建不必要的、多余的SuperType中的属性】
function inheritPrototype (subType, superType) {
    var prototype = Object.create(superType)
    prototype.constructor = subType
    subType.prototype = prototype
}
function Son5 (name, prop) {
    Father.call(this, prop)
    this.name = name
}
inheritPrototype(Son5, Father)


// ES6
class Father {
    name = 'father'
    constructor(prop) {
        this.prop = prop
    }
    func () {
        console.log('father')
    }
    static staticFunc () {
        console.log('static')
    }
}
class Son extends Father {
    constructor(name, prop) {
        super(prop)
        this.name = name
    }
    // 不要与构造函数中的属性同名，不然会被覆盖
    // getter 与 setter 必须同级出现
    set a (a) {
        console.log('set a')
        // 这里使用下划线，不然this.a使这个setter本身，会出现递归调用的问题，然后range error
        this._a = a
    }
    get a () {
        console.log('get a')
        return this._a
    }
}

// 常规对象的继承【寄生组合的原理】
// Object.setPrototypeOf(Son.prototype, father);