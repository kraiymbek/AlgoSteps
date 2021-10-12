/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(str) {
    str = str.split("");
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i]==="(")
            stack.push(i);
        else if(str[i]===")"){
            if(stack.length) stack.pop();
            else str[i]="";
        }
    }

    for(let i of stack) str[i] = "";

    return str.join("");
};

// console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
// console.log(minRemoveToMakeValid('))(('));
// console.log(minRemoveToMakeValid('(a(b(c)d)'));
// console.log(minRemoveToMakeValid('a)b(c)d'));
console.log(minRemoveToMakeValid("())()((("));