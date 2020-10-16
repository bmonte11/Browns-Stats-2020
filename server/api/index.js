const router = require('express').Router()
// const puppeteer = require('puppeteer')
module.exports = router

router.use('/users', require('./users'))
router.use('/teams', require('./teams'))
// router.use('/players', require('./players'))

// router.get('/homepage', async () => {
//   console.log('does this get called?')
//   await scrapeProduct(
//     'https://www.pro-football-reference.com/teams/cle/2020.htm#all_passing'
//   )
// })

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
