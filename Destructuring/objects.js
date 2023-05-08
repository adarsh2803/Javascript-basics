let obj = {
  name: "hallo",
  add: {
    country: "India",
    state: { pincode: "DL" },
  },
};

let {
  name: n,
  add: {
    country: cn,
    state: { pincode: pn },
  },
} = obj;

console.log(n, cn, pn);
