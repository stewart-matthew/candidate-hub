const express = require('express');
const router = express.Router();

// Load Candidate model
const Candidate = require('../../models/Candidate');

// @route GET api/candidates/test
// @description tests candidates route
// @access Public
router.get('/test', (req, res) => res.send('candidate route testing!'));

// @route GET api/candidates
// @description Get all candidates
// @access Public
router.get('/', (req, res) => {
  Candidate.find()
    .then(candidates => res.json(candidates))
    .catch(err => res.status(404).json({ nocandidatesfound: 'No Candidates found' }));
});

// @route GET api/candidates/:id
// @description Get single candidate by id
// @access Public
router.get('/:id', (req, res) => {
  Candidate.findById(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(err => res.status(404).json({ nocandidatefound: 'No Candidate found' }));
});

// @route GET api/candidates
// @description add/save candidate
// @access Public
router.post('/', (req, res) => {
  Candidate.create(req.body)
    .then(candidate => res.json({ msg: 'Candidate added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this candidate' }));
});

// @route GET api/candidates/:id
// @description Update candidate
// @access Public
router.put('/:id', (req, res) => {
  Candidate.findByIdAndUpdate(req.params.id, req.body)
    .then(candidate => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/candidates/:id
// @description Delete candidate by id
// @access Public
router.delete('/:id', (req, res) => {
  Candidate.findByIdAndRemove(req.params.id, req.body)
    .then(candidate => res.json({ mgs: 'Candidate entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a candidate' }));
});

module.exports = router;