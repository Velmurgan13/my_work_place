const userControl = require("../controllers/userControl");
const Auth = require("../middleware/auth");
const router = require("express").Router();

router.post("/register", userControl.signupUser);

router.post("/login", userControl.loginUser);

router.get("/verify", userControl.verifyToken);

// router.post("/home", (req, res) => {
//   res.json({
//     msg: "All Notes will display",
//   });
// });

// router.post("/addNotes", (req, res) => {
//   res.json({
//     msg: "Add Notes form will display",
//   });
// });

module.exports = router;
