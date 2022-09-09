const router = require('express').Router()
const IndexController = require('../constrolers/indexColntroler')

router.get('/', IndexController.getPage)

module.exports = router
