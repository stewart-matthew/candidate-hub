const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  gpa: {
    type: Number,
    required: true
  },
  graduationDate: {
    type: Date,
    required: true
  },
  positionType: {
    type: String,
    required: true
  },
  sponsorshipNeeded: {
    type: Boolean,
    required: true
  },
  resume: {
    type: String
  },
  event: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    required: true
  },
  starred: {
    type: Boolean,
    required: true
  }
});

module.exports = Candidate = mongoose.model('candidate', CandidateSchema);