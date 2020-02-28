// 箭头函数没有 this，所以也不能用 call()、apply()、bind() 这些方法改变 this 的指向
var value = 1;
var result = (() => this.value).bind({ value: 2 })();
console.log(result); // 1

// 箭头函数没有自己的 arguments 对象，这不一定是件坏事，因为箭头函数可以访问外围函数的 arguments 对象【采用rest参数解决】
function constant () {
    return () => arguments[0]
}
var result = constant(1);
console.log(result()); // 1

// 箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。
var Foo = () => { };
var foo = new Foo(); // TypeError: Foo is not a constructor

// 因为不能使用 new 调用，所以也没有 new.target 值
// https://es6.ruanyifeng.com/#docs/class#new-target-%E5%B1%9E%E6%80%A7

// 由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。
// 连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。


// 不适合使用的情况【需要用到 调用者的 this】
var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this)
    }
}
obj.b();
// undefined Window
obj.c();
// 10, Object {...}