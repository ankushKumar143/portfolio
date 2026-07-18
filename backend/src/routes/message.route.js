const express = require("express");
const router = express.Router();

const {
    createMessage,
    getMessages,
    deleteMessage,
} = require("../controllers/message.controller");

// Create Message
router.post("/", createMessage);

// Get All Messages
router.get("/", getMessages);

// Delete Message
router.delete("/:id", deleteMessage);

module.exports = router;
