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
  shots: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Shot",
  }]
})

// ShootSchema.pre('deleteOne', function (next) {
//   const shoot = this;
//   shoot.model('Shot').deleteOne({ shoot: shoot }, next);
//   console.log('it worked')
// });

module.exports = mongoose.model('Shoot', ShootSchema)
