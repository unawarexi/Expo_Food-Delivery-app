const express = require('express');
const userCantroller = require('../cantrollers/UserController');

const router = express.Router();

router.get("/", userCantroller.getAllUser);
router.post("/", userCantroller.createUser);

module.exports = router;