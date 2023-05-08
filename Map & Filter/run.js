let arr = [1, 2, 3, 4, 5];

//Both map and filter in JS returns values
//filter returns T/F , map transforms values (same as Java)

let b = arr
  .filter((val) => {
    return val & 1;
  })
  .map((val, idx) => {
    return { value: 2 * val, index: 3 * idx };
  });

console.log(b);
