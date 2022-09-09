const router = require('express').Router()

const indexRouter = require('./indexRouter')
const documentRouter = require('./documentRouter')

router.use('/', indexRouter)
router.use('/document', documentRouter)

module.exports = router
