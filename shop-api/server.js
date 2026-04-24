import express from "express";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());


// Static folder setup

app.use("/public/images", express.static("public/images"));


// Routes

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});