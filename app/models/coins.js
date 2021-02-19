const mongoose = require('moongose')

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ticker: {
    type: String,
    required: true
  },
  blockchain: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Coin', coinSchema)
