const arr = ["one", "two", "one", "three", "three", "two"];

let uniques = [...new Set(arr)];

console.log(uniques);

// -------------------------

const uniqueArray = arr.filter(function (item, pos, self) {
  return self.indexOf(item) == pos;
});
console.log(uniques);

// --------------------------
// Coding master way of doing staff :,{}


const removeDuplicateValues = (arr) => {
  return arr.reduce((accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value];
  },[]);
};

console.log(removeDuplicateValues(arr));
