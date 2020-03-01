// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。


// 使用队列，记录滑动窗口最大值的下标，最先进入的在最左边
function maxInWindows (num, size) {
    let res = [];
    if (size == 0) {
        return res;
    }
    let queue = [];
    for (let i = 0; i < num.length; i++) {
        let left = i - size + 1 // 窗口左边界
        if (queue.length === 0) {
            queue.push(i)
        } else if (left > queue[0]) {
            // 窗口移动了，最大的被移除了，第二大的替换
            queue.shift()
        }
        // 新进入窗口的值如果比上一个大的话，剔除，确保最大的在最queue[0]处
        while (queue.length && num[queue[queue.length - 1]] <= num[i]) {
            queue.pop()
        }
        queue.push(i)
        if (left >= 0) {
            res.push(num[queue[0]])
        }
    }
    return res;
}
