
// Requiring necessary modules
var tableData = require("../db/db.json");
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');


// Crating a function to generate random ID
function genId() {
    return crypto.randomBytes(8).toString('hex');
}

module.exports = function (app) {


    // Route to retrieve saved notes from db.json
    app.get("/api/notes", function (req, res) {
        res.json(tableData);
    });


    // Route to post a note to /notes and save to db.json
    app.post("/api/notes", function (req, res) {

        var filePath = path.join(__dirname, "../db/db.json")

        // Response to user that call succeeded
        res.json({ ok: true });

        // Setting request body to variable 
        var newNote = req.body
        newNote.id = genId();
        console.log(newNote);

        // Adding new note to database
        tableData.push(newNote);

        // Writing file to database
        fs.writeFile(filePath, JSON.stringify(tableData, null, 4), err => {
            if (err) throw err;
            console.log("Note Saved!");
        });


        res.send(newNote)

    });


    // Route to delete any saved notes from db.json
    app.delete("/api/notes/:id", function (req, res) {
        var noteID = req.params.id
        var filePath = path.join(__dirname, "../db/db.json")
        for (const note of tableData) {
            if (noteID === note.id) {
                const index = tableData.indexOf(note)
                tableData.splice(index, 1)
                fs.writeFile(filePath, JSON.stringify(tableData, null, 4), err => {
                    if (err) throw err;
                    console.log("Note Deleted!");

                })
                res.end()
            }
        }
    });

};
