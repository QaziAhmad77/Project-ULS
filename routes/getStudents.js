const express = require("express");
const router = express.Router();

const controller = require("../controller/student")

router.get("/getStudents", controller.getStudents);
router.post("/getStudents/search", controller.search);

module.exports = router;