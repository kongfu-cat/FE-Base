// 我们可以用2 * 1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2 * 1的小矩形无重叠地覆盖一个2 * n的大矩形，总共有多少种方法？

function rectCover (number) {
    // 竖着放：f(n-1)
    // 横着放：f(n-2)
    // f(n)=f(n-1)+f(n-2) [n>1, f(0)=0, f(1)=1, f(2)=2, f(3)=3]
    if (!number) return 0

    let left = 1, right = 2
    while (--number) {
        right += left
        left = right - left
    }
    return left
}