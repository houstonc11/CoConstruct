var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');

var app = express();
app.use(cors());
app.options("*",cors());
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("./public/"));
// app.use(express.static("./css/"));
// app.use(express.static("./vendor/"));
// app.use(express.static("./styles/"));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'vendor')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'fonts')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/landingpage/index.html'));
});

app.get("/client1", function(req, res) {
    res.sendFile(path.join(__dirname + '/client1.html'));
});

app.get("/clientPortal", function(req, res) {
    res.sendFile(path.join(__dirname + '/clientPortal.html'));
});


app.use(methodOverride("_method"));

require("./controllers/user.js")(app);

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
        
        });
    });