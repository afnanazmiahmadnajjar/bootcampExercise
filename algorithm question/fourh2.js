// // var first = [1, 2, 3];
// // var second = [2, 3, 4, 5];

// // var common = first.filter((x) => second.indexOf(x) !== -1);
// // console.log("The common elements are: " + common);

// function intersection(first, second) {
//   var s = new Set(second);
//   console.log(s);
//   return first.filter((item) => s.has(item));
// }

// var first = [1, 2, 3];
// var second = [2, 3, 4, 5];

// var common = intersection(first, second);
// console.log("The common elements are: " + common);

// // function getIntersection(...listOfArrays) {
// function getIntersectionOfTwo(intersection, iterableItem) {
//   // in order to compare huge arrays more efficiently access ...
//   const [
//     comparisonBase, // ... the shorter one as comparison base
//     comparisonList, // ... and the longer one to filter from.
//   ] = [intersection, iterableItem].sort((a, b) => a.length - b.length);

//   // create a `Map` based lookup table from the shorter array.
//   const itemLookup = comparisonBase.reduce(
//     (map, item) => map.set(item, true),
//     new Map()
//   );

//   // the intersection is the result of following filter task.
//   return comparisonList.filter((item) => itemLookup.has(item));
// }
// // assure only array type arguments.
// listOfArrays = listOfArrays.filter(Array.isArray);

// return (
//   (listOfArrays[1] ?? listOfArrays[0]) &&
//   listOfArrays.reduce(getIntersectionOfTwo)
// );

// console.log("getIntersection() ...", getIntersection());
// console.log('getIntersection(9, "foo", 0) ...', getIntersection(9, "foo", 0));
// console.log(
//   'getIntersection([2, 7, 0], "bar") ...',
//   getIntersection([2, 7, 0], "bar")
// );
// console.log(
//   "getIntersection([2, 7, 0, 4], [6, 2, 7, 3]) ...",
//   getIntersection([2, 7, 0, 4], [6, 2, 7, 3])
// );
// console.log(
//   "getIntersection([2, 7, 0, 4], [6, 2, 7, 3], [9, 1, 2]) ...",
//   getIntersection([2, 7, 0, 4], [6, 2, 7, 3], [9, 1, 2])
// );
// console.log(
//   "getIntersection([2, 7, 0, 4], [6, 2, 7, 3], [9]) ...",
//   getIntersection([2, 7, 0, 4], [6, 2, 7, 3], [9])
// );

// function findCommon(a, b, c, n1, n2, n3) {
//   // three sets to maintain frequency of elements
//   let uset = new Set();
//   let uset2 = new Set();
//   let uset3 = new Set();
//   for (let i = 0; i < n1; i++) {
//     uset.add(a[i]);
//   }
//   for (let i = 0; i < n2; i++) {
//     uset2.add(b[i]);
//   }
//   // checking if elements of 3rd array are present in first 2 sets
//   for (let i = 0; i < n3; i++) {
//     if (uset.has(c[i]) == true && uset2.has(c[i]) == true) {
//       // using a 3rd set to prevent duplicates
//       if (uset3.has(c[i]) == false) document.write(c[i], " ");
//       uset3.add(c[i]);
//     }
//   }
// }

// // Driver code
// let ar1 = [1, 5, 10, 20, 40, 80];
// let ar2 = [6, 7, 20, 80, 100];
// let ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
// let n1 = ar1.length;
// let n2 = ar2.length;
// let n3 = ar3.length;

// document.write("Common Elements are ", "</br>");
// findCommon(ar1, ar2, ar3, n1, n2, n3);
//***************************
// function doubleValues(array) {
//   var newArray = [];
//   array.forEach(function (el) {
//     newArray.push(el, el);
//   });
//   return newArray;
// }

// console.log(doubleValues([1, 2, 3]));
//*****seventh*** */
var test = "123blah456 random text 789";
var matches = test.match(/\d+/g);
var matchesString = matches.join("");
var matchesArray = matchesString.split("");
var matchesArrayReversed = matchesArray.reverse();
var reversed = matchesArrayReversed.join("");
console.log(reversed);