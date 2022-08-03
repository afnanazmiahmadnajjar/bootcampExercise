const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/solarSystemdb", {
  useNewUrlParser: true,
});
const Schema = mongoose.Schema;
const solarSystemSchema = new Schema({
  planetes: [{ type: Schema.Types.ObjectId, ref: "planete" }],
  StarName: String,
});
const planetes = new Schema({
  name: String,
  system: [{ type: Schema.Types.ObjectId, ref: "solarsystem" }],
  vistors: [{ type: Schema.Types.ObjectId, ref: "visitor" }],
});
const vistor = new Schema({
  name: String,
  homePlanet: [{ type: Schema.Types.ObjectId, ref: "planete" }],
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "planete" }],
});

const solarsystem = mongoose.model("solarsystem", solarSystemSchema);
const planete = mongoose.model("planete", planetes);
const visitor = mongoose.model("visitor", vistor);
let s = new solarsystem({
  planetes: [],
  StarName: "bear",
});
let p1 = new planete({
  name: "Earthy",
  system: s,
  vistors: [],
});
let p2 = new planete({
  name: "ploto",
  system: s,
  vistors: [],
});
let p3 = new planete({
  name: "Otared",
  system: s,
  vistors: [],
});
let v1 = new visitor({
  name: "Afnan",
  homePlanet: p2,
  visitedPlanets: [],
});
let v2 = new visitor({
  name: "ahmad",
  homePlanet: p3,
  visitedPlanets: [],
});
s.planetes.push(p1);
s.planetes.push(p2);
s.planetes.push(p3);
v1.visitedPlanets.push(p3);
v1.visitedPlanets.push(p1);
p1.vistors.push(v1);
p3.vistors.push(v1);
v2.visitedPlanets.push(p1);
p1.vistors.push(v2);
s.save();
v1.save();
v2.save();
p1.save();
p2.save();
p3.save();
visitor
  .findOne({})
  .populate("visitedPlanets")
  .exec(function (err, visitor) {
    visitor.visitedPlanets.forEach((vp) => console.log(vp.name));
  });

planete
  .findOne({})
  .populate("vistors")
  .exec(function (err, planet) {
    planet.vistors.forEach((v) => console.log(v.name));
  });

solarsystem
  .findOne({})
  .populate({
    path: "planetes",
    populate: {
      path: "vistors",
    },
  })
  .exec(function (err, solarSystem) {
    for (plane of solarSystem.planetes) {
      plane.vistors.forEach((v) => console.log(v.name));
    }
  });
visitor
  .findOne({})
  .populate({
    path: "homePlanet",
    populate: {
      path: "solarsystem",
    },
  })
  .exec(function (err, visitor) {
    console.log(visitor.homePlanet.solarsystem.starName);
  });

planete
  .findOne({})
  .populate("system visitors")
  .exec(function (err, planet) {
    console.log(planet.solarSystem.starName);
    planet.vistors.forEach((v) => console.log(v.name));
  });
