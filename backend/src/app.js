const express = require("express");
const app = express();
const cors = require("cors");
const aboutRoute = require("./routes/about.route");
const projectsRoute = require("./routes/projects.route");
const loginRoute = require("./routes/auth.route");

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);
app.use(express.json());

app.use("/api/about", aboutRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/auth", loginRoute);

module.exports = app;
