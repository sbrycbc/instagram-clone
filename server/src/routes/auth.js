const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");


//register
router.post("/register", async(req, res)=> {
    try{
        const {fullName, username, email, password, bio, profilePicture} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      bio,
      profilePicture,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router