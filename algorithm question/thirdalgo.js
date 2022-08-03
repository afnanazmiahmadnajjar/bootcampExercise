function findSecondLargest(arr) {
  let largest = 0,
    secondLargest = 0;

  for (i of arr) {
    if (i > largest) {
      largest = i;
    }
  }

  for (j of arr) {
    if (j > secondLargest && j < largest) {
      secondLargest = j;
    }
  }

  return secondLargest;
}

console.log("Second Largest", findSecondLargest([1, 4, 2, 3, 0]));

// let secondMax = function () {
//   var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
//   var max = Math.max.apply(null, arr); // get the max of the array
//   arr.splice(arr.indexOf(max), 1); // remove max from the array
//   return Math.max.apply(null, arr); // get the 2nd max
// };
// secondMax();
