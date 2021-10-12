// var removeOuterParentheses = function(S) {
//     let stack = [];
//
//     for(s of S) {
//         let stackLastEl = stack[stack.length - 1];
//         console.log("stack", stackLastEl, "item", s)
//         if (s === '(' && stackLastEl === '(') {
//             console.log("case1")
//             stack.pop();
//             stack.push(s);
//         } else if (s === ')' && stackLastEl === ')') {
//             console.log("case2")
//             // stack.pop();
//         } else {
//             console.log("case3")
//             stack.push(s);
//         }
//
//         console.log("results", stack)
//         console.log("------------")
//     }
//
//     return stack;
// };

var removeOuterParentheses = function(S) {
    let stack = [];
    let result = '';

    for (const letter of S) {
       if( letter === '(') {
           if (stack.length) {
               result+=letter;
           }
           stack.push(letter);
       } else {
           stack.pop();
           if (stack.length) {
               result+=letter;
           }
       }
    }

    return result;
};

console.log(removeOuterParentheses('(()())(())(()(()))'))
// console.log(removeOuterParentheses('()()'))