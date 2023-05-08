//Spread Operator in objects
let obj = {
  city: "Delhi",
  noor: "chahal",
  add: {
    country: "India",
    state: {
      pin: "111",
      code: "DL",
      name: {
        fistName: "amit",
      },
    },
  },
};

//Spread operator in JS for objects
// let obj2 = {
//   ...obj,
//   add: {
//     ...obj.add,
//     state: { ...obj.add.state, name: { ...obj.add.state.name } },
//   },
// };

//Instead using spread operator use JSON.Stringfy(obj) as it makes strings on Stack
let obj2 = JSON.parse(JSON.stringify(obj));

obj2.noor = "sharma";
obj2.city = "dubai";
obj2.add.country = "UAE";
obj2.add.state.code = 10;
obj2.add.state.pin = "222";
obj2.add.state.name.fistName = "anuj";

// const util = require("util"); //To print entire object
// console.log(util.inspect(obj, false, null, true));
// console.log(util.inspect(obj2, false, null, true));
console.dir(JSON.stringify(obj));
console.dir(JSON.stringify(obj2));

// let arr = [obj, obj2, obj];
// let arr2 = [...arr];

// arr2.push(obj2);

// console.log(arr);
// console.log(arr2);
