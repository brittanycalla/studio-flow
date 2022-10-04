const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, itemsController.getItems)

router.post('/createItem', itemsController.createItem)

// router.put('/markComplete', itemsController.markComplete)

// router.put('/markIncomplete', itemsController.markIncomplete)

router.delete('/deleteItem/:id', itemsController.deleteItem)

module.exports = router