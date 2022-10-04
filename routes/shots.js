const express = require("express");
const router = express.Router();
const shotsController = require("../controllers/shots");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Shot Routes - simplified for now
router.post("/createShot/:id", shotsController.createShot);

router.delete("/deleteShot/:id", shotsController.deleteShot);

module.exports = router;