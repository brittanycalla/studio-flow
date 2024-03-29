const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// router.get('/', ensureAuth, homeController.getIndex)
router.get('/', ensureGuest, homeController.getIndex)
router.get('/api/user', authController.getUser)
router.get('/api/home', ensureAuth, homeController.getHome)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router