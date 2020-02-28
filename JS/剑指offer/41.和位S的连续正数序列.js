function FindContinuousSequence (sum) {
    // write code here
    // 求和公式 [0...n] sum = n*(n+1)/2
    // [a...a+n] (n+1)*(2*a+n)=2*sum
    // mid+(mid+1) 肯定会>=需要求的数

    let a, n = 1, nMax, res = []
    // 计算可能的最大n

    for (nMax = 1; (nMax + 2) * (nMax + 1) < 2 * sum; nMax++);
    if (sum <= 1) return res
    a = (2 * sum - n * n - n) / 2 / (n + 1)

    while (n <= nMax) {
        if (a && !(a - ~~a)) {
            let seq = []
            for (let i = a; i <= a + n; i++) {
                if (i > 0) {
                    seq.push(i)
                }
            }
            res.unshift(seq)
        }
        n++
        a = (2 * sum - n * n - n) / 2 / (n + 1)
    }
    return res
}