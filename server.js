//Dependencies
const express = require('express');
const path = require('path');

var app = express ();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes")(app)


//Starts the server to begin listening to client requests.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});