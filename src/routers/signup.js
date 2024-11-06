const express = require("express");
const router = express.Router();
const signUpController = require("../app/controllers/signUpController");

router.put("/create", signUpController.create);
router.use("/", signUpController.index);

module.exports = router;
