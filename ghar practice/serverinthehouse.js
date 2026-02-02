const express = require("express");
const userdata = require("./data");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Dev");
});
app.get("/userdetail", (req, res) => {
    res.json(userdata);
});
app.get("/userdetail1", (req, res) => {
    let ans = {
        time: "morning",
        month: "january",
        year: "2026"
    }
    res.json(ans);
})
app.get("/userAge", (req, res) => {
    let usergreaterthan25 = userdata.filter((ele) => ele.age > 25)
    console.log(usergreaterthan25)
    res.json(usergreaterthan25);
})
app.get("/surname", (req, res) => {

    let finaldata = userdata.map((ele) => {
        let finalName = "";

        if (ele.gender === "male") {
            finalName = "Mr. " + ele.name;
        } else if (ele.gender === "female") {
            finalName = "Mrs. " + ele.name;
        }
        return { finalName }
    });
    res.json(finaldata);
});
app.get('/user/page', (req, res) => {
    let name = req.query.name;
    let size = req.query.size;
    res.json({
        name: name,
        size: size
    })
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});