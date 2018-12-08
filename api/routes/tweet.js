const express = require("express");
const router = express.Router();

const tweetController = require('../controllers/tweet');

router.get("/:_id", tweetController.get_tweet);


module.exports = router;