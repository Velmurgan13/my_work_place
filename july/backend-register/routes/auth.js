const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if user is  alsready saved in database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  // Hashing the password
  const hashedpassword = await bcrypt.hash(req.body.password, 12);

  // Saving user to database
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//login

router.post("/login", async (req, res) => {
  //validation of data before user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Checking if the email exists already or not
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist");

  //password is right or wrong
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send("You have entered wromg password");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
