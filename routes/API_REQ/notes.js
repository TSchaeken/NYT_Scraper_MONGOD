const router = require('express').Router();
const notes = require('../../controller/notes');

router.get('/', notes.findNotes);
router.delete('/:id', notes.deleteNote);
router.put('/:id', notes.createNote);

module.exports = router;
