const express = require("express");
const { getAbout, updateAbout } = require("../controllers/about.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getAbout);
router.patch("/", authMiddleware, updateAbout);

module.exports = router;
