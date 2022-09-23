const express = require("express");
const router = express.Router();

const mainRouter = require("./signUpIn");
const getStudentsRouter = require("./getStudents");

router.use("/main", mainRouter, getStudentsRouter);

module.exports = router;