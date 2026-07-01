const authService = require("../services/auth.service");

// Register
const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login
const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Profile
const getProfile = async (req, res) => {
    try {
        console.log("fffffffff",req.user);
        const result = await authService.getProfile(req.user);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Change Password
const changePassword = async (req, res) => {
    try {
        console.log("headers",req.user);
        console.log("headersssss",req.body);
        const result = await authService.changePassword(req.user, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Logout
const logout = async (req, res) => {

    try {
console.log(req.user.id)
        const result = await authService.logout(req.user.id);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
module.exports = {
    register,
    login,
    getProfile,
    changePassword,
    logout
};