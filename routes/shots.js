const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const shotsController = require("../controllers/shots");

//Shot Routes - simplified for now
router.post("/createShot/:id", upload.none(), shotsController.createShot);

router.put("/markComplete/:id", shotsController.markComplete);

router.put("/markIncomplete/:id", shotsController.markIncomplete);

router.delete("/deleteShot/:id", shotsController.deleteShot);

module.exports = router;