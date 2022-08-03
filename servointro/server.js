const express = require("express");
const app = express();
console.log(express);
console.log(app);
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
});

app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
