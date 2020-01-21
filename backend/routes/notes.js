const router = require('express').Router();
let Note = require('../models/note.model');

//get all notes
router.route('/').get((req, res) => {
  Note.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

//create new note
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newNote = new Note({ title, description });

  newNote
    .save()
    .then(() => res.json('Note added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//find a note
router.route('/:id').get((req, res) => {
  Note.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete note
router.route('/:id').delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//edit a note
router.route('/update/:id').post((req, res) => {
  Note.findById(req.params.id)
    .then(data => {
      data.title = req.body.title;
      data.description = req.body.description;

      data
        .save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
