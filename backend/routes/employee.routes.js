const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// Employee CRUD
// Add Employee
router.post(
    "/",
    verifyToken,
    employeeController.addEmployee
);

// Get All Employees
router.get(
    "/",
    verifyToken,
    employeeController.getAllEmployees
);

// Get Employee By Id
router.get(
    "/:id",
    verifyToken,
    employeeController.getEmployeeById
);

// Update Employee
router.put(
    "/:id",
    verifyToken,
    employeeController.updateEmployee
);

// Delete Employee
router.delete(
    "/:id",
    verifyToken,
    employeeController.deleteEmployee
);

module.exports = router;
