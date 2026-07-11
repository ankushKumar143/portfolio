const express = require("express");
const upload = require("../middleware/upload.middleware");
const {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} = require("../controllers/projects.controller");

const router = express.Router();

router.get("/", getProjects);
router.post("/", upload.single("image"), createProject);
router.patch("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
