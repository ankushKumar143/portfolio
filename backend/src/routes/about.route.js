const express = require("express");
const { getAbout, updateAbout } = require("../controllers/about.controller");

const router = express.Router();

router.get("/", getAbout);
router.patch("/", updateAbout);

module.exports = router;
