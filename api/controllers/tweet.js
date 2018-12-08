const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Tweet = require("../models/tweet");

exports.get_tweet = (req, res, next) => {
    Tweet.find()
      .select("_id tweet")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          User: docs.map(doc => {
            return {
              
              _id: doc._id,
              tweet: tweet
              
            };
          })
        };
        //   if (docs.length >= 0) {
        res.status(200).json(response);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };