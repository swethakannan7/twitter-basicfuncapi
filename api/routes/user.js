const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');


router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.get("/", checkAuth, UserController.get_all_tweets);

//router.get("/:userId", checkAuth, UserController.get_details);

module.exports = router;
