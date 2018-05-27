const db = require('../models');

module.exports = {
  findNotes(req, res) {
    db.Notes.find({ articleId: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },

  createNote(req, res) {
    console.log(req.body);
    db.Notes.create(req.body).then((dbNote) => {
      res.json(dbNote);
    });
  },

  deleteNote(req, res) {
    db.Notes.remove({ _id: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },
};
