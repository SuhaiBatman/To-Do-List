require('dotenv').config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

//routers
const todo = require("./routers/todo");

//connect to database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));


// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Sushi is sus!!!"));

//use routers
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});