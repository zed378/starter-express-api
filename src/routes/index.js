const express = require("express");

const router = express.Router();

const { getMessage, addMessage } = require("../controller");

router.get("/message", getMessage);
router.post("/add", addMessage);

module.exports = router;
