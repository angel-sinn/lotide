// eqArrays function

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertAraysEqual function

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Actual function

const takeUntil = function (array, callback) {
  let newArray = [];
  for (const element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

// Test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

const results1 = takeUntil(data1, (x) => x < 0);
const results2 = takeUntil(data2, (x) => x === ",");

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // true
assertArraysEqual(results2, ["I've", "been", "to", "Redwood"]); // false