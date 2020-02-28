// Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性
var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello!';

// 有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]

// 希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
s1 = Symbol.for('1')
s2 = Symbol.for('1')
s3 = Symbol('1')
s1 == s2 // true
Symbol.keyFor(s1)
// '1'
Symbol.keyFor(s3)
// undefined