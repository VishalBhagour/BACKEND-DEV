import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/user", (req, res) => {
    let userData = {
        name: "amit",
        age: "25"
    }
    res.render("user", { userData })
})

app.get('/list', (req, res) => {

    let arr = ["apple", "mango", "orange"]
    res.render("list", { arr })
});

app.listen(3000, () => {
    console.log('server is running');
});