import { curry, _ } from './柯里化'


// 我们模拟下第一个尾调用函数执行时的执行上下文栈变化：

// ```js
// // 伪代码
// ECStack.push(<f> functionContext);

// ECStack.pop();

// ECStack.push(<g> functionContext);

// ECStack.pop();
// ```

// 我们再来模拟一下第二个非尾调用函数执行时的执行上下文栈变化：

// ```js
// ECStack.push(<f> functionContext);

// ECStack.push(<g> functionContext);

// ECStack.pop();

// ECStack.pop();
// ```

function factorial (n) {
    if (n === 1) return n;
    return n * factorial(n - 1)
}

factorial(3) // 6


// 尾递归实现【与函数执行上下文有关，确保最后返回的是一个函数，而不是表达式等】
function factorial (n, res) {
    if (n === 1) return res;
    return arguments.callee(n - 1, n * res) // 必须使用这个来进行解耦，不然下面重写了会覆盖掉
}
factorial = curry(factorial, _, 1)
factorial(3) // 6