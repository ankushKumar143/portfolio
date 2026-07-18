require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT || 3000;

const serverStart = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server started on port 3000`);
    });
};

serverStart();
