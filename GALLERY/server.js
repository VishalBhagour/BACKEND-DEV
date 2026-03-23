const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// static folder
app.use("/static", express.static(path.join(__dirname, "public")));

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    const imagesPerPage = 10;

    // read actual files from public folder
    const allFiles = fs.readdirSync(path.join(__dirname, "public"))
        .filter(file => file.endsWith(".jpg") || file.endsWith(".png"));

    const totalImages = allFiles.length;

    let page = parseInt(req.query.page) || 1;
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    const images = allFiles
        .slice(start, end)
        .map(file => `/static/${file}`);

    res.render("gallery", {
        images,
        currentPage: page,
        totalPages
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});