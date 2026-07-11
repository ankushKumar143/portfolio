require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const serverStart = async () => {
    await connectDB();
    app.listen(3000, () => {
        console.log(`Server started on port 3000`);
    });
};

serverStart();
