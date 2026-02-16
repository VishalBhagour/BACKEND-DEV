import express from "express";
import bookRoutes from "./routes/book.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/books", bookRoutes);
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});