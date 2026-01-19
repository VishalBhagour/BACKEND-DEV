const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/home", (req, res) => {
    res.send("hello vishal")
})
app.get("/about", (req, res) => {
    res.send("hello dev")
})
app.get("/kingkong", (req, res) => {
    res.send("hello manjeet")
})
app.get("/doratheexplorer", (req, res) => {
    res.send("hello shashank")
})

app.get("/userdetails1", (req, res) => {

    let user1 = {
        status: "success",
        message: "hello from express1",
        timestamp: new Date().toISOString()
    }
    res.json(user1)
})
app.get("/userdetails2", (req, res) => {

    let user2 = {
        status: "success",
        message: "hello from express2",
        timestamp: new Date().toISOString()
    }
    res.json(user2)
}) 
app.get("/userdetails3", (req, res) => {

    let user3 = {
        status: "success",
        message: "hello from express3",
        timestamp: new Date().toISOString()
    }
    res.json(user3)
})

app.listen(3000, () => {
    console.log("server is running")
})