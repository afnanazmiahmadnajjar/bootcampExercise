const mongoose = require("mongoose"); //allows comunication with mangouseDB
mongoose.connect("mongodb://localhost/humans", { useNewUrlParser: true });

const Schema = mongoose.Schema;
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const person = mongoose.model("person", personSchema);
const p1 = new person({ firstName: "leeroy", lastName: "Dweikat", age: 1999 });
console.log(p1);
p1.save();
