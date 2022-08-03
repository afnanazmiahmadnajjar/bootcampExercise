// // $("h1").css("background-color", "blue");

// // $(".red-div").css("background-color", "red");
// // $("li:first-child").css("background-color", "green");
// // $("li:last-child").css("background-color", "pink");
// // $("#brown-div").css("background-color", "brown");
// $("#b1").addClass("box");
// $("#b2").addClass("box");
// $("#my-input").val("Terabyte");
// const color = $("div").data().color;
// console.log(color); //prints #2980b9
// const data = $("div").data()
//' console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate
// $("#b1").hover(function () {
//   $("#b1").css("background-color", "blue");
// });
// $("button").on("click", function () {
//   alert($("#my-input").val());
// });
// $("#b1").hover(function () {
//   console.log($(this));
// // });
// $(".box").hover(function () {
//   $(this).css("background-clor", "blue");
// });
// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"];

// for (let name of names) {
//   $("body").append(`<div>${name}</div>`);
// }
// $("#btn").click(alert("hi"));
// let posts = [{ name: "Shoobert" }, { name: "Kayne" }];

// for (let post of posts) {
//   $("#posts").append(`
//         <div>${post.name}</div><input type="text" placeholder="say something nice" />
//     `);
// }

// posts.splice(0, 1);
const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!",
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one.",
  },
];
const render = function () {
  for (let post of posts) {
    let postBox = $(
      "<div class='post-box'><p class=name>" +
        post.name +
        "</p><p class=text>" +
        post.text +
        "</p></div>"
    );
    $("#timeline").append(postBox);
  }
};
render();
