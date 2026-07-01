const db = require("../config/database");

// Add Employee
const addEmployee = (employee) => {

    return new Promise((resolve, reject) => {

        const sql = `
        INSERT INTO employees
        (
            first_name,
            last_name,
            email,
            phone,
            gender,
            dob,
            department,
            designation,
            salary,
            joining_date,
            status,
            address,
            city,
            state,
            country,
            pincode,
            user_id
        )
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        `;

        db.query(sql, [

            employee.first_name,
            employee.last_name,
            employee.email,
            employee.phone,
            employee.gender,
            employee.dob,
            employee.department,
            employee.designation,
            employee.salary,
            employee.joining_date,
            employee.status,
            employee.address,
            employee.city,
            employee.state,
            employee.country,
            employee.pincode,
            employee.user_id

        ], (err, result) => {

            if (err) return reject(err);

            resolve({
                success: true,
                message: "Employee Added Successfully",
                employeeId: result.insertId
            });

        });

    });

}

// Get All Employees
const getAllEmployees = () => {

    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM employees";

        db.query(sql, (err, result) => {

            if (err)
                return reject(err);

            resolve(result);

        });

    });

}

// Get Employee By Id
const getEmployeeById = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
        SELECT *
        FROM employees
        WHERE emp_id = ?
        `;

        db.query(sql, [id], (err, result) => {

            if (err)
                return reject(err);

            resolve(result);

        });

    });

}

// Update Employee
const updateEmployee = (id, employee) => {

    return new Promise((resolve, reject) => {

        const sql = `
        UPDATE employees
        SET

        first_name=?,
        last_name=?,
        email=?,
        phone=?,
        gender=?,
        dob=?,
        department=?,
        designation=?,
        salary=?,
        joining_date=?,
        status=?,
        address=?,
        city=?,
        state=?,
        country=?,
        pincode=?,
        user_id=?

        WHERE emp_id=?
        `;

        db.query(sql, [

            employee.first_name,
            employee.last_name,
            employee.email,
            employee.phone,
            employee.gender,
            employee.dob,
            employee.department,
            employee.designation,
            employee.salary,
            employee.joining_date,
            employee.status,
            employee.address,
            employee.city,
            employee.state,
            employee.country,
            employee.pincode,
            employee.user_id,
            id

        ], (err, result) => {

            if (err)
                return reject(err);

            resolve({

                success: true,
                message: "Employee Updated Successfully"

            });

        });

    });

}

// Delete Employee
const deleteEmployee = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
        DELETE FROM employees
        WHERE emp_id = ?
        `;

        db.query(sql, [id], (err, result) => {

            if (err)
                return reject(err);

            resolve({

                success: true,
                message: "Employee Deleted Successfully"

            });

        });

    });

}

module.exports = {
    addEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};