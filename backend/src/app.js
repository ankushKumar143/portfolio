const express = require("express");
const app = express();
const cors = require("cors");
const aboutRoute = require("./routes/about.route");
const projectsRoute = require("./routes/projects.route");

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);
app.use(express.json());

app.use("/api/about", aboutRoute);
app.use("/api/projects", projectsRoute);

module.exports = app;
