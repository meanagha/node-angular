const employeeService = require("../services/employee.service");

// Add Employee
const addEmployee = async (req, res) => {

    try {

        const result = await employeeService.addEmployee(req.body);

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Employees
const getAllEmployees = async (req, res) => {

    try {

        const result = await employeeService.getAllEmployees();

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Employee By Id
const getEmployeeById = async (req, res) => {

    try {

        const result = await employeeService.getEmployeeById(req.params.id);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Employee
const updateEmployee = async (req, res) => {

    try {

        const result = await employeeService.updateEmployee(
            req.params.id,
            req.body
        );

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Employee
const deleteEmployee = async (req, res) => {

    try {

        const result = await employeeService.deleteEmployee(req.params.id);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};