// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）

// B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]=C[i-1]*D[i-1]，也就是我们要求出 C[i] 和 D[i] 就行
// 改进：B数组并且借助中间变量tmp来实现
function multiply (array) {
    let B = []
    B[0] = 1
    for (let i = 1; i < array.length; i++) {
        B[i] = array[i - 1] * B[i - 1]
    }
    let tmp = 1
    for (let i = array.length - 2; i >= 0; i--) {
        tmp *= array[i + 1]
        B[i] *= tmp
    }
    return B
}