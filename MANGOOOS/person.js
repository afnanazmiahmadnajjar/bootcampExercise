const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: {
    city: String,
    street: String,
    apartment: Number,
  },
});

const Person = mongoose.model("person", personSchema);
//Creat
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }); //purposefully ignoring the `address` field
console.log(p1.firstName);
p1.save();

// let p2 = new Person({ firstName: "afnan", lastName: "najaar", age: 23 }); //purposefully ignoring the `address` field
// let p3 = new Person({ firstName: "Ahmad", lastName: "hamayel", age: 25 }); //purposefully ignoring the `address` field
// let p4 = new Person({ firstName: "ali", lastName: "alian", age: 25 }); //purposefully ignoring the `address` field
// const allTheShopperts = [p2, p3, p4];
// allTheShopperts.forEach((s) => s.save());

//retrive
// Person.find({ _id: "62e78d0088bc1337ccc92515" }, function (err, people) {
//   console.log(people);
// });
// Person.findById("62e78d0088bc1337ccc92515", function (err, person) {
//   person.age += 10;
//   person.save();
// });
// Person.find({ _id: "62e78d0088bc1337ccc92515" }, function (err, people) {
//   console.log(people);
// });p
// Person.findByIdAndUpdate(
//   "62e78d0088bc1337ccc92515",
//   { age: 20 },
//   function (err, person) {
//     console.log(person);
//   }
// );
// Person.find({ _id: "62e78d0088bc1337ccc92515" }, function (err, people) {
//   console.log(people);
// });
