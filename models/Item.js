const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: false
  },
  styleNumber: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  styleName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Item', ItemSchema)