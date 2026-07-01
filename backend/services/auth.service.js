const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = require("../models/auth.model");

// Register
const register = async (userData) => {

    const existingUser = await authModel.findUserByEmail(userData.email);

    if (existingUser.length > 0) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    userData.password = hashedPassword;

    return await authModel.register(userData);

};

// Login
const login = async (loginData) => {

    const user = await authModel.findUserByEmail(loginData.email);

    if (user.length === 0) {
        throw new Error("Invalid Email");
    }

    const isMatch = await bcrypt.compare(
        loginData.password,
        user[0].password
    );

    if (!isMatch) {
        throw new Error("Invalid Password");
    }

    const token = jwt.sign(
        {
            id: user[0].id,
            email: user[0].email,
            role: user[0].role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    return {
        success: true,
        message: "Login Successful",
        token,
        user: {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            role: user[0].role
        }
    };

};

// Profile
const getProfile = async (user) => {
    console.log("ssssssss",user)
    return {
        success: true,
        data: user
    };

};

// Change Password
const changePassword = async (user, data) => {

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);

    await authModel.updatePassword(user.id, hashedPassword);

    return {
        success: true,
        message: "Password Changed Successfully"
    };

};

// Logout
const logout = async (userId) => {

    //await authModel.clearToken(userId);

    return {
        success: true,
        message: "Logout successful"
    };

};

module.exports = {
    register,
    login,
    getProfile,
    changePassword,
    logout
};