import express from 'express';
const app = express();

app.use(express.json());

let data = [{
    id: 1,
    username: "qwerty",
    password: "1234"

}, {
    id: 2,
    username: "ramesh",
    password: "12345"
}]

app.get("/", (req, res) => {
    res.send(200).json({
        message: "home route"
    })
})

app.get("/user", (req, res) => {
    res.status(200).json({
        message: "all user",
        user
    })
})


app.post("/user", (req, res) => {
    console.log(req.body);

    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "username and password are required"
        })
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: "password must be at least 6 characters long"
        })
    }

    let newUser = {
        id: user.length + 1,
        username,
        password,
    };
    user.push(newUser);

    res.status(200).json({
        message: "user created successfully",
    })
});

app.put("/user/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let userIdx = data.findIndex((ele) => ele.id === id);
    if (userIdx == -1) {
        res.status(400).json({
            message: "user not found"
        });
    }
    let updatedUser = {...user, username: "giluaa" };
    data[userIdx] = updatedUser;

    res.status(200).json({
        message: "user updated successfully",
    });
});

app.listen(3000, () => {
    console.log("server is running")
})