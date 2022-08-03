// // program to count the number of vowels in a string

// function countVowel(str) {
//   // find the count of vowels
//   const count = str.match(/[aeiou]/gi).length;

//   // return number of vowels
//   return count;
// }

// // take input
// const string = prompt("Enter a string: ");

// const result = countVowel(string);

// console.log(result);

//second solution
// const countVowels = (str) =>
//   Array.from(str).filter((letter) => "aeiou".includes(letter)).length;

// console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // 5
// console.log(countVowels("test")); // 1
// console.log(countVowels("ddd")); // 0

//third solution un cleaned used condition
// function getVowels(str) {
//     var vowelsCount = 0;

//     //turn the input into a string
//     var string = str.toString();

//     //loop through the string
//     for (var i = 0; i <= string.length - 1; i++) {

//     //if a vowel, add to vowel count
//       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }

//****fourth excercies in codio*******

/* The function checks if the array elements are consecutive
	If elements are consecutive, then returns true, else returns
	false */
// function areConsecutive(arr, n) {
//   if (n < 1) return false;

//   /* 1) Get the minimum element in array */
//   let min = getMin(arr, n);

//   /* 2) Get the maximum element in array */
//   let max = getMax(arr, n);

//   /* 3) max - min + 1 is equal to n, then only check all elements */
//   if (max - min + 1 == n) {
//     /* Create a temp array to hold visited flag of all elements.
// 			Note that, calloc is used here so that all values are initialized
// 			as false */
//     let visited = new Array(n);
//     for (let i = 0; i < n; i++) {
//       visited[i] = false;
//     }
//     let i;
//     for (i = 0; i < n; i++) {
//       /* If we see an element again, then return false */
//       if (visited[arr[i] - min] != false) {
//         return false;
//       }
//       /* If visited first time, then mark the element as visited */
//       visited[arr[i] - min] = true;
//     }
//     /* If all elements occur once, then return true */
//     return true;
//   }
//   return false; // if (max - min + 1 != n)
// }

// /* UTILITY FUNCTIONS */
// function getMin(arr, n) {
//   let min = arr[0];
//   for (let i = 1; i < n; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   return min;
// }
// function getMax(arr, n) {
//   let max = arr[0];
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }

// /* Driver program to test above functions */
// let arr = [5, 4, 2, 3, 1, 6];
// let n = arr.length;
// if (areConsecutive(arr, n)) {
//   document.write("Array elements are consecutive");
// } else {
//   document.write("Array elements are not consecutive");
// }
// This code is contributed by avanitrachhadiya2155
//**************** */ fifth ecersise in algo codio*********************

