const express = require('express');
const authRoutes = express.Router();
const authController = require('.../controllers/auth.controller');

authRoutes.get('/verify-token', authController.verifyToken);
authRoutes.get('/login', authController.login);
authRoutes.get('/register', authController.register);

module.exports = authRoutes;
