require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); //cross origin resoure sharing
const path = require("path");

const employeeRoutes = require("./routes/employeeRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Serve Static Files (CSS + Images)
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", employeeRoutes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});