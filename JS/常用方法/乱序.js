// 乱序，更加随机和平衡【fisher-yates算法】
function shuffle (arr) {
    for (let i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i)
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]
    }
}

// sort版本，不够随机【v8中，数组sort采用的是插入排序】
function sort (arr) {
    arr.sort(() => {
        return Math.random() - 0.5
    })
}