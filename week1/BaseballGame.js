var calPoints = function(ops) {
    let result = [];
    for(let i = 0; ops.length > i; i++) {
        let value = ops[i];
        if(value === 'C' && result.length) {
            result.pop();
        } else if(value === 'D' && result.length) {
            result.push(result[result.length-1]*2);
        } else if(value === '+' && result.length >= 2) {
            result.push(+result[result.length-1] + +result[result.length-2])
        } else {
            result.push(+value)
        }
    }

    return result.reduce((a,b) => a+b);
};

console.log(calPoints(["1","D","D","D"]))