const express = require("express");
const router = express.Router();

const controller = require("../controller/signUpIn")

router.get("/", controller.main);
router.get("/signUpForm", controller.signUpForm);
router.post("/signUp", controller.signUp);
router.get("/logInForm", controller.logInForm);
router.post("/logIn", controller.logIn);

module.exports = router;