// var dailyTemperatures = function(temperatures) {
//     let stack = [];
//
//     for(let i = 0; temperatures.length > i; i++) {
//         let value = temperatures[i];
//         let counter = 0;
//         let rised = false;
//         for (let j = i + 1; temperatures.length > j; j++) {
//             counter++;
//             stack.push(value)
//
//             if (value < temperatures[j]) {
//                 rised = true;
//                 break;
//             }
//         }
//
//         stack.push(rised ? counter : 0);
//     }
//
//     return stack;
//
// };

var dailyTemperatures = function(T) {
    let stack = [];
    let result = new Array(T.length).fill(0);
    for(let i=T.length-1; i >= 0; i--){
        console.log("start", i)
        console.log("StacklastEle", T[stack[stack.length-1]])
        console.log("T[i]", T[i])
        while(stack.length && T[i] >= T[stack[stack.length-1]]){
            stack.pop();
        }
        console.log("StacklastEle", T[stack[stack.length-1]])

        if(stack.length){
            console.log("here+>", stack[stack.length-1] - i)
            result[i] = stack[stack.length-1] - i;
        }
        stack.push(i)
        console.log("end-----------------")
    }
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))