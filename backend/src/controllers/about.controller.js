const About = require("../models/about.model");

const getAbout = async (req, res) => {
    try {
        const about = await About.findOne();

        if (!about) {
            return res.status(404).json({ message: "About not found" });
        }

        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAbout = async (req, res) => {
    try {
        const { title, content } = req.body;

        const about = await About.findOneAndUpdate(
            {},
            { title, content },
            { returnDocument: "after", upsert: true, runValidators: true },
        );

        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAbout, updateAbout };
