const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const employeeRoutes = require("./routes/employee.routes");

const app = express();

// Database Connection
require("./config/database");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// Test API
app.get("/", (req, res) => {
    res.send("Employee Management Backend Running...");
});

// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`);
});