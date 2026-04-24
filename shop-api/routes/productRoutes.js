import express from "express";
import fs from "fs";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

const productFile = "products.json";


// GET products

router.get("/", (req, res) => {

const products = JSON.parse(
fs.readFileSync(productFile)
);

res.json(products);

});


// ADD product

router.post("/", authMiddleware, (req, res) => {

let products = JSON.parse(
fs.readFileSync(productFile)
);

const newProduct = {

id: Date.now(),

...req.body

};

products.push(newProduct);

fs.writeFileSync(
productFile,
JSON.stringify(products, null, 2)
);

res.json(newProduct);

});


// UPDATE product

router.put("/:id", authMiddleware, (req, res) => {

let products = JSON.parse(
fs.readFileSync(productFile)
);

products = products.map(product =>
product.id == req.params.id
? { ...product, ...req.body }
: product
);

fs.writeFileSync(
productFile,
JSON.stringify(products, null, 2)
);

res.json({
message: "Product updated"
});

});


// DELETE product

router.delete("/:id", authMiddleware, (req, res) => {

let products = JSON.parse(
fs.readFileSync(productFile)
);

products = products.filter(
product => product.id != req.params.id
);

fs.writeFileSync(
productFile,
JSON.stringify(products, null, 2)
);

res.json({
message: "Product deleted"
});

});


export default router;