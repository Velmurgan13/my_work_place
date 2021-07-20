require("dotenv").config();
const users = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const userControl = {
  signupUser: async (req, res) => {
    try {
      const { userName, email, password } = req.body;

      // to avoid duplicate email id
      const user = await users.findOne({ email: email });
      if (user) return res.status(400).json({ msg: "Email id already exists" });

      // converting the password into hash code using bcrypt
      const passwordHash = await bcrypt.hash(password, 10);
      //   console.log(passwordHash);
      const newUser = new users({
        userName: userName,
        email: email,
        password: passwordHash,
      });
      await newUser.save();

      res.json({
        msg: "signup success",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Checking the user if exist or not with existing emailId in Db
      const user = await users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "user does not exist" });

      // Verifying the password with our database
      const isMatching = await bcrypt.compare(password, user.password);
      if (!isMatching)
        return res.status(400).json({ msg: "Incorrect password" });

      const payload = { id: user._id, name: user.userName };
      //   console.log("payload", payload);

      const token = JWT.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      //   console.log("token", token);
      res.json({ token });
      //   res.json({
      //     msg: "login success",
      //   });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  verifyToken: (req, res) => {
    try {
      const token = req.header("Authorization");
      //   console.log(token);
      if (!token) return res.send(false);

      JWT.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(false);

        const user = await users.findById(verified.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userControl;
