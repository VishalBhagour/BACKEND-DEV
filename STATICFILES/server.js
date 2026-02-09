import express from "express";

import path from "path";

import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "public");

// http://localhost:3000/static/Neymar.jpg
app.use("/static", express.static(filepath));

const port = 3000;

app.get("/", (req, res) => {
    res.send("server is running");
});

app.listen(port, () => {
    console.log("server is running");
});