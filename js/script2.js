const arr = [1, 29, 13, 44, 85, 65, 17, 888, 229];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
  return a - b;
}
arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach(function (item, o, arr) {
  console.log(`${o}: ${item} inside massive ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join(":::"));
