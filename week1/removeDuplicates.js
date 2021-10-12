/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];

    for(let letter of s) {
        let stackLastEl = stack[stack.length - 1]; //b
        if (letter === stackLastEl) {
            stack.pop();
            continue;
        }

        stack.push(letter);
    }

    return stack.join('');
};

console.log(removeDuplicates('abbaca'));