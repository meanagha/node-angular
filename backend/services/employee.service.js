const employeeModel = require("../models/employee.model");

// Add Employee
const addEmployee = async (employeeData) => {

    return await employeeModel.addEmployee(employeeData);

};

// Get All Employees
const getAllEmployees = async () => {

    return await employeeModel.getAllEmployees();

};

// Get Employee By Id
const getEmployeeById = async (id) => {

    return await employeeModel.getEmployeeById(id);

};

// Update Employee
const updateEmployee = async (id, employeeData) => {

    return await employeeModel.updateEmployee(id, employeeData);

};

// Delete Employee
const deleteEmployee = async (id) => {

    return await employeeModel.deleteEmployee(id);

};

module.exports = {
    addEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};