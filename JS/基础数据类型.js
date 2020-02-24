0.1 + 0.2 === 0.3 // 浮点运算并不精确【Number类型，二进制小数的有效位数只有52位，从0到51位（包括边界）】
// 1位符号位sign
// 11位阶码e
// 52位有效数字b51....b0

// false

0.1 + 0.2 - 0.3 === 0
// false

parseFloat((0.1 + 0.2).toFixed(2)) === 0.3
// true

// 使用 decimal.js，Math.js, big.js 等库

[1, NaN, 2].indexOf(NaN) // 无法定位NaN。ES6：[1, NaN, 2].findIndex(y => Object.is(NaN, y))
// -1

null == undefined
// true

null != false && undefined != true
// true

undefined != false && undefined != true
// true

false == 0
// true

false == -1
// false

1 == true
// true

2 == true
// false

'' == false
// true

NaN != false && NaN != true && NaN != NaN
// true

false == []
// true

// { } == true
// Uncaught SyntaxError: Unexpected token '=='

if ({}) { console.log(123) }
// 123

// null和undefined逻辑判断时都认为是false，if (a !== null && a !== undefined)

1 + -'1'
// 0

1 + '1'
// "11"

// null如果进入运算，真的会被解析成为0或false
1 + null
// 1
1 * null
// 0
1 / null
// Infinity

// undefined进入运算，一律得到NaN
1 + undefined
// NaN
1 * undefined
// NaN
1 / undefined
// NaN

!!{}
// true
// 相当于直接强制转换为Boolean类型