const express = require("express");
const app = express();
const cors = require("cors");
const aboutRoute = require("./routes/about.route");
const projectsRoute = require("./routes/projects.route");
const loginRoute = require("./routes/auth.route");
const messageRoute = require("./routes/message.route");

app.use(
    cors({
        origin: ["http://localhost:5173", "https://ankushkumar143.netlify.app"],
    }),
);
app.use(express.json());

app.use("/api/about", aboutRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/auth", loginRoute);
app.use("/api/messages", messageRoute);

module.exports = app;
