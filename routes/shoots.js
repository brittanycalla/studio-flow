const express = require('express')
const router = express.Router()
const shootsController = require('../controllers/shoots') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, shootsController.getShoots)

router.get("/:id", ensureAuth, shootsController.getShootDetails);

router.post('/createShoot', shootsController.createShoot)

// router.put('/markComplete', shootsController.markComplete)

// router.put('/markIncomplete', shootsController.markIncomplete)

router.delete('/deleteShoot', shootsController.deleteShoot)

module.exports = router