// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。


// 利用：一个长度为n的数组里的所有数字都在0到n-1的范围内

/*
    1. 把当前序列当成是一个下标和下标对应值是相同的数组；
    2. 遍历数组，判断当前位的值和下标是否相等： （数归其标）
    2.1. 若相等，则遍历下一位；
    2.2. 若不等，则将当前位置i上的元素和a[i]位置上的元素比较：
    若它们相等，则成功，即找到了重复的值！
    若不等，则将它们两交换。
    换完之后a[i]位置上的值和它的下标是对应的，但i位置上的元素和下标并不一定对应；重复2.2的操作，直到当前位置i的值也为i，将i向后移一位，再重复2.
*/
function duplicate (numbers, duplication) {
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    for (let i = 0; i < numbers.length; i++) {
        while (i !== numbers[i]) {
            if (numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i]
                return true
            }
            [numbers[i], numbers[numbers[i]]] = [numbers[numbers[i]], numbers[i]]
        }
    }
    return false
}

// 2. 当一个数字被访问过后，可以设置对应位上的数 + n，之后再遇到相同的数时，会发现对应位上的数已经大于等于n了，那么直接返回这个数即可
function duplicate (numbers, duplication) {
    for (let i = 0; i < numbers.length; i++) {
        let index = numbers[i];
        if (index >= numbers.length) {
            index -= numbers.length;
        }
        if (numbers[index] >= numbers.length) {
            duplication[0] = index;
            return true;
        }
        numbers[index] = numbers[index] + numbers.length;
    }
    return false;
}