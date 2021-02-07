
var path = require("path");


module.exports = function (app) {

    // Route to retrieve saved notes from /notes
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
