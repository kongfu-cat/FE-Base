// 1.不会被提升
if (false) {
    let value = 1;
}
console.log(value); // Uncaught ReferenceError: value is not defined

// 2.重复声明报错
var value = 1;
let value = 2; // Uncaught SyntaxError: Identifier 'value' has already been declared

// 3.不绑定全局作用域
var value = 1;
console.log(window.value); // 1
// 然而 let 和 const 不会：
let value = 1;
console.log(window.value); // undefined

// TDA
var value = "global";
// 例子1
(function () {
    console.log(value);

    let value = 'local';
}());
// 例子2
{
    console.log(value);

    const value = 'local';
};