var express = require("express");

var app = express();

// Set dynamic port
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Initializing app to start
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log("http://localhost:" + PORT)
});
