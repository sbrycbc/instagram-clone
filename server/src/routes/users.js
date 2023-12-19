const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// update user

router.put("/:id", async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).send(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated!!!")
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

// delete user

router.delete("/:id", async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted!!!")
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

// get a user

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  
    try {
      const user = userId
      ? await User.findById(userId)
      : await User.findOne({username: username});
      res.status(200).json(user)
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = router;
