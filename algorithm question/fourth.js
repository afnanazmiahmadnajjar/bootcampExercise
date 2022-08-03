let intersection = arrA.filter((x) => arrB.includes(x));
var array3 = array1.filter(function (obj) {
  return array2.indexOf(obj) == -1;
});
function getArraysIntersection(a1, a2) {
  return a1.filter(function (n) {
    return a2.indexOf(n) !== -1;
  });
}
var colors1 = ["red", "blue", "green"];
var colors2 = ["red", "yellow", "blue"];
var intersectingColors = getArraysIntersection(colors1, colors2); //["red", "blue"]
