// const tree = {
//     type: 'div',
//     attrs: {
//         class: 'test',
//         id: 'test-id'
//     },
//     children: [{
//         type: 'p',
//         attrs: {},
//         children: [
//             'test'
//         ],
//     }, {
//         type: 'div',
//         attrs: {},
//         children: null
//     }]
// }
//
// const parseHTML = (obj) => {
//     const attrsKeysDict = [];
//
//     if (obj.attrs) {
//         Object.keys(obj.attrs).forEach((attr) => {
//             attrsKeysDict.push(attr);
//         })
//     }
//
//     if (!obj.children) {
//         return `<${obj['type']} ${attrsKeysDict.length && attrsKeysDict.map(item =>`${item}="${obj.attrs[item]}"`).join(" ")}></${obj['type']}>`;
//     } else {
//         if (Array.isArray(obj.children)) {
//             return `<${obj['type']} ${ attrsKeysDict.length ? attrsKeysDict.map(item => {
//                 return `${item}="${obj.attrs[item]}"`;
//             }).join(" ") : ''}>
// ${obj.children.map(item => parseHTML(item)).join("\n")}
// </${obj['type']}>`;
//         } else {
//             return `<${obj['type']}>${obj.children}</${obj['type']}>`;
//         }
//     }
// };
//
// console.log(parseHTML(tree))
//
//
//
//
//
// // we need a valid html here as a result
// function parseToHTML() {
//     return ''; //<div class="test" id="test-id"><p>test</p><div></div></div>
// }

// let x = 1;
//
// function func() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 2;
// }
//
// func();

// function sayHi() {
//     console.log(phrase);
//
//     var phrase = "Hello";
// }
//
// sayHi();

console.log(globalThis)