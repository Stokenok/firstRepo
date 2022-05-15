const soldier = {
  health: 400,
  armor: 100,
  accuracy: 5,
};
const john = Object.create(soldier);

console.dir(john);
console.dir(soldier);
const oleh = soldier;
oleh.armor = 500;
console.log(oleh);
//Object.setPrototypeOf(john, soldier);
