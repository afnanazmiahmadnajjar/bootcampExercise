const median = "afnam";
let arr1 = Array.from(median);
function median2(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var i = arr.length / 2;
  return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}
const l = median2(arr1);
console.log(l);
