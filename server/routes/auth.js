const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(409).json({ message: "Username already in use!" });
    }

    const userEmail = await User.findOne({ email: req.body.email });
    if (userEmail) {
      return res
        .status(409)
        .json({ message: "Email address already registered!" });
    }

    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Cannot register user at the moment!" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials!"});
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json({message: "Incorrect password!"});
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SEC_KEY,
      { expiresIn: "7d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json({ message: "Cannot login at the moment!" });
  }
});

module.exports = router;
