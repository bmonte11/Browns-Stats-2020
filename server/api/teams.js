const router = require('express').Router()
const {Team} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const teams = await Team.findAll()
    res.json(teams)
    console.log('found the teams')
  } catch (err) {
    next(err)
  }
})
