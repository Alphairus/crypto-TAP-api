const express = require('express')
const passport = require('passport')

const Coin = require('../models/coin')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

//CREATE
// POST /coins
router.post('/coins', requireToken, (req, res, next) => {
  req.body.coin.owner = req.user.id

  Coin.create(req.body.coin)
  .then(coin => {
    res.status(201).json({ coin: coin.toObject() })
  })
  .catch(next)
})

// INDEX
// GET /coins
router.get('/coins', requireToken, (req, res, next) => {
  Coin.find(req.user._id)
    .then(coins => {
      return coins.map(coin => coin.toObject())
    })
    .then(coins => res.status(200).json({ coins: coins }))
    .catch(next)
})

// SHOW
// GET /coins/id
router.get('./coins/:id', requireToken, (req, res, next) => {
  Coin.findById(req.params.id)
    .then(handle404)
    .then(coin => res.status(200).json({ coin: coin.toObject() }))
    .catch(next)
  })

// UPDATE
// PATCH /coins/6031bd01bc64537670e9f055
router.patch('/coins/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.coin.owner

  Coin.findById(req.params.id)
    .then(handle404)
    .then(coin => {
      requireOwnership(req, coin)
      return coin.updateOne(req.body.coin)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE coins/6031bd01bc64537670e9f055
router.delete('/coins/:id', requireToken, (req, res, next) => {
  Coin.findById(req.params.id)
    .then(handle404)
    .then(coin => {
      requireOwnership(req, coin)
      coin.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
