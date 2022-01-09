const mongoose = require('mongoose')
import { v4 as uuidv4 } from 'uuid';

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
