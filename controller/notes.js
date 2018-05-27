const db = require('../models');

module.exports = {
  findNotes(req, res) {
    db.Note.find({ articleId: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },

  createNote(req, res) {
    db.Note.create(req.body).then((dbNote) => {
      res.json(dbNote);
    });
  },

  deleteNote(req, res) {
    db.Note.remove({ _id: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },
};
