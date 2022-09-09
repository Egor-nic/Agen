const router = require('express').Router()
const DocumentController = require('../constrolers/documentControler')

router.post('/sortDoc', DocumentController.sortDocList)
router.post('/searchId', DocumentController.searchId)
router.post('/searchName', DocumentController.searchName)
router.post('/searchDate', DocumentController.searchDate)

module.exports = router
