const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const AuditSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuidv4()
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  severity: {
    type: String,
  },
  component: {
    type: String
  },
  context: {
    type: String,
  },
  message: {
    type: String,
  },
  tags: [{
    type: String,
    default: []
  }],
})

module.exports = mongoose.model('Audit', AuditSchema)
