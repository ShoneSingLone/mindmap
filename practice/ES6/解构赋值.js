({ b, a } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20
// 属性名可以不对应吗？先来个例子
({ a, b } = { aa: 10, bb: 20 });
console.log(a); // undefined
console.log(b); // undefined
// 不可以，与赋值不同的是在表达式左边定义了要从原变量中取出什么变量，取什么当然是要一致。

// 交换变量的情况
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"