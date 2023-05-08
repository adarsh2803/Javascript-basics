//Spread Operator in Arrays
let arr = [1, 2, 3];
let arr2 = [...arr]; //spread operator ... 3 dots -> makes a new list basically
let arr3 = JSON.parse(JSON.stringify(arr));

arr.push(4);
arr3.push(9);

console.log(arr);
console.log(arr2);
console.log(arr3);
