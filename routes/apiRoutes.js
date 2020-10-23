var notes = require("../db/db.json");
var fs = require("fs")
var { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });


  app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = uuidv4();

    notes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(notes), 'utf-8', function (err) {
      if (err) throw err;
      res.json(newNote);
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    res.json("Success!")
    
  });

};