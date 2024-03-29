const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const shootsController = require('../controllers/shoots') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, shootsController.getShoots)

router.get("/:id", ensureAuth, shootsController.getShootDetails);

router.post('/createShoot', upload.none(), shootsController.createShoot)

// router.put('/markComplete', shootsController.markComplete)

// router.put('/markIncomplete', shootsController.markIncomplete)

router.delete('/deleteShoot/:id', shootsController.deleteShoot)

module.exports = router