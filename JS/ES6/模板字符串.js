
// 模板标签
concat = function (literals, ...values) {
    // console.log(literals, values);
    let result = literals.reduce((acc, cur, i) => {
        // console.log(acc, cur, i); 
        return acc + values[i - 1] + cur
    });
    return result;
}

concat`12${3}45`