const express = require('express');
const router = express.Router();
// const fetch = require('node-fetch');

// Load Candidate model
const Candidate = require('../../models/Candidate');
const CandidateNoResume = require('../../models/CandidateNoResume');

// @route GET api/candidates/test
// @description tests candidates route
// @access Public
router.get('/test', (req, res) => res.send('candidate route testing!'));

// @route GET api/candidates
// @description Get all candidates
// @access Public
router.get('/', (req, res) => {
  let filter = {};
  if (req.query.firstName) filter.firstName = req.query.firstName;
  if (req.query.lastName) filter.lastName = req.query.lastName;
  if (req.query.gpa) filter.gpa = { $gte: req.query.gpa };
  if (req.query.major) filter.major = req.query.major;
  if (req.query.degree) filter.degree = req.query.degree;
  if (req.query.graduationDate) filter.graduationDate = req.query.graduationDate;
  if (req.query.positionType) filter.positionType = req.query.positionType;
  if (req.query.sponsorshipNeeded) filter.sponsorshipNeeded = req.query.sponsorshipNeeded;
  if (req.query.event) filter.event = req.query.event;
  if (req.query.starred) filter.starred = req.query.starred;
  
  Candidate.find(filter, {resume: 0})
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

// @route POST api/candidates
// @description add/save candidate
// @access Public
router.post('/', (req, res) => {
  // if (req.body.resume) {
  //   fetch(req.body.resume)
  //   .then((response) => {
  //     response.blob()
  //     .then((outputBlob) => {
  //       req.body.resume = outputBlob;
  //       Candidate.create(req.body)
  //       .then(candidate => res.json({ msg: 'Candidate added successfully with resume' }))
  //       .catch(err => res.status(400).json({ error: 'Unable to add this candidate and resume' }));
  //     });
  //   })
  // }

  // else {
    Candidate.create(req.body)
    .then(candidate => res.json({ msg: 'Candidate added successfully' }))
    .catch(err => {
      res.status(400).json({ error: 'Unable to add this candidate' })
      console.log(err)});
  // }
});

// @route PUT api/candidates/:id
// @description Update candidate
// @access Public
router.put('/:id', (req, res) => {
  Candidate.findByIdAndUpdate(req.params.id, req.body)
    .then(candidate => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/candidates/:id
// @description Delete candidate by id
// @access Public
router.delete('/:id', (req, res) => {
  Candidate.findByIdAndRemove(req.params.id, req.body)
    .then(candidate => res.json({ mgs: 'Candidate entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a candidate' }));
});

module.exports = router;