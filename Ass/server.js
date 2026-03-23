const express = require("express");

const app = express();
const port = 3000;

app.use("/static", express.static('zunaid'));

app.set("view engine", "ejs");
app.set("hamza", "./hamza");


app.get("/", (req, res) => {
    const images = [
        "/static/images1.jpg",
        "/static/image2.jpg"
    ];

    res.render("dhurandar", { images });
});

app.listen(port, () => {
    console.log(`Server started at port 3000`);
});