const mongoose = require('mongoose')

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
  }
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, coin) => {
      return {
        id: coin._id,
        name: coin.name,
        ticker: coin.ticker,
        blockchain: coin.blockchain
      }
    }
  }
})

module.exports = mongoose.model('Coin', coinSchema)
