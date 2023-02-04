require('dotenv').config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Sushi is sus!!!"));

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});