const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");
const {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} = require("../controllers/projects.controller");

const router = express.Router();

router.get("/", getProjects);
router.post("/", authMiddleware, upload.single("image"), createProject);
router.patch("/:id", authMiddleware, upload.single("image"), updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
