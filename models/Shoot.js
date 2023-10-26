const mongoose = require('mongoose')
const Shot = require('../models/Shot')

const ShootSchema = new mongoose.Schema({
  shootName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  contentType: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  },
  shotList: {
    type: [Shot.schema],
    required: false
  }
})

module.exports = mongoose.model('Shoot', ShootSchema)
