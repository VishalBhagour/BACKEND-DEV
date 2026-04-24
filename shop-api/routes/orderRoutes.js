import express from "express";
import fs from "fs";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

const productFile = "products.json";
const orderFile = "orders.json";


// PLACE ORDER

router.post("/", authMiddleware, (req, res) => {

let products = JSON.parse(
fs.readFileSync(productFile)
);

let orders = JSON.parse(
fs.readFileSync(orderFile)
);

const product = products.find(
p => p.id == req.body.productId
);


if (!product || product.stock === 0) {

return res.json({
message: "Product out of stock"
});

}


// reduce stock

product.stock -= 1;


fs.writeFileSync(
productFile,
JSON.stringify(products, null, 2)
);


// create order

const newOrder = {

id: Date.now(),

productId: req.body.productId

};

orders.push(newOrder);


fs.writeFileSync(
orderFile,
JSON.stringify(orders, null, 2)
);

res.json(newOrder);

});


// GET orders

router.get("/", authMiddleware, (req, res) => {

const orders = JSON.parse(
fs.readFileSync(orderFile)
);

res.json(orders);

});


export default router;