// 针对 NaN， +0 -0，引用类型{}[]，1 和 new Number(1)

console.log(+0 === -0); // true
1 / +0 // Infinity
1 / -0 // -Infinity

1 / +0 === 1 / -0 // false
Math.round(-0.1) // -0
Math.floor(0.1)


console.log(NaN === NaN); // false
isNaN(NaN) === isNaN(NaN)


// 难点：循环引用
a = { abc: null };
b = { abc: null };
a.abc = a;
b.abc = b;

// 核心
// while (length--) {
//     if (aStack[length] === a) {
//         return bStack[length] === b;
//     }
// }

