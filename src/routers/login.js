const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/loginController");

router.post("/valid", loginController.login);
router.use("/", loginController.index);

module.exports = router;
