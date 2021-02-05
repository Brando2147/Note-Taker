

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");



module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function (req, res) {
        res.json({ ok: true });

    });


    app.delete("/api/:id", function (req, res) {

    });


};
