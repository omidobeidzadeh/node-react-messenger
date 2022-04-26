const express = require("express");
const authHandler = require("./handler");
const authRouter = express.Router();

authRouter.post("/register", authHandler.register);
authRouter.post("/login", authHandler.login);

module.exports = authRouter;
