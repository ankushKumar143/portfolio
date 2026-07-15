require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("../src/models/admin.model");
const bcrypt = require("bcrypt");

const createAdmin = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await Admin.create({
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
    });
    await mongoose.disconnect();
};

createAdmin();
