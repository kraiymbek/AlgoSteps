/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [];

    for(let i = 0; s.length > i; i++) {
        let value = s[i];
        const stackLastEl = stack[stack.length - 1];
        if ((stackLastEl === '(' && value === ")")) {
            stack.pop();
        } else {
            stack.push(value)
        }
    }

    return stack.length;
};

console.log(minAddToMakeValid("()))(("));
// console.log(minAddToMakeValid("()"));