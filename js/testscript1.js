function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
const numbers = {
  a: 2,
  b: 9,
  c: {
    x: 7,
    y: 98,
  },
};
const newNumbers = copy(numbers);
console.log(newNumbers);
newNumbers.a = 889;
console.log(newNumbers);
console.log(numbers);
newNumbers.c.x = 666;
console.log(newNumbers);

const add = {
  d: 17,
  e: 25,
};
console.log(Object.assign(numbers, add));
const oldArray = [];
for (let i = 0; i < 20; i++) {
  oldArray[i] = Math.round(Math.random() * 100);
}
console.log(oldArray);
const newArray = oldArray.slice();
newArray[1] = 80000;
console.log(oldArray);
console.log(newArray);
