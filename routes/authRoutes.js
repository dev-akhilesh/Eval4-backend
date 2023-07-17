const express = require('express');
const { registeredUser, loginUser } = require('../controllers/authController')
const router = express.Router();

router.post('/register', registeredUser);
router.post('/login', loginUser);

module.exports = router;