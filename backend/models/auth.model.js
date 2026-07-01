const db = require("../config/database");

// Register User
const register = (userData) => {

    return new Promise((resolve, reject) => {

        const sql = `
            INSERT INTO users
            (name, email, password, role)
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                userData.name,
                userData.email,
                userData.password,
                userData.role
            ],
            (err, result) => {

                if (err) {
                    return reject(err);
                }
                console.log(result)
                resolve(result);

            }
        );

    });

};

// Find User By Email
const findUserByEmail = (email) => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM users
            WHERE email = ?
        `;

        db.query(sql, [email], (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

};

// Update Password
const updatePassword = (userId, password) => {

    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE users
            SET password = ?
            WHERE id = ?
        `;

        db.query(sql, [password, userId], (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

};

// Save JWT Token (Optional)
// const saveToken = (userId, token) => {

//     return new Promise((resolve, reject) => {

//         const sql = `
//             UPDATE users
//             SET token = ?
//             WHERE id = ?
//         `;

//         db.query(sql, [token, userId], (err, result) => {

//             if (err) {
//                 return reject(err);
//             }

//             resolve(result);

//         });

//     });

// };

// Clear JWT Token (Optional)
// const clearToken = (userId) => {

//     return new Promise((resolve, reject) => {

//         const sql = `
//             UPDATE users
//             SET token = NULL
//             WHERE id = ?
//         `;

//         db.query(sql, [userId], (err, result) => {

//             if (err) {
//                 console.log("errrrr",err)
//                 return reject(err);
//             }

//             resolve(result);

//         });

//     });

// };

module.exports = {
    register,
    findUserByEmail,
    updatePassword
    //saveToken
    //clearToken
};