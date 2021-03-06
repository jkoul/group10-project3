var express = require('express');
var app = express();
app.set("view engine", "jade");
var path = require("path");
var bodyParser = require("body-parser");

var usersController = require("./app/controllers/users");
var questionsController = require("./app/controllers/questions");
var answersController = require("./app/controllers/answers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname + "/app/assets")));
app.set("view engine", "hbs")

app.get("/", function(req, res){

  res.render("index")
});

app.use("/", usersController);
app.use("/", questionsController);
app.use("/", answersController);



var port = process.env.PORT || 3000;
console.log("working!")
app.listen(port);
