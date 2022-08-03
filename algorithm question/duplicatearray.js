let arr = [];
let arr1 = [1, 2, 3];

for (let i = 0; i < arr1.length ; i++) {
  arr[i] = arr1[i];
  arr[i %( arr1.length) ]= arr1[i];
}

console.log(arr);
