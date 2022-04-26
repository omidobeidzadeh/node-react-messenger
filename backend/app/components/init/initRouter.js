const express = require("express");
const initHandler = require("./handler");
const initRouter = express.Router();

initRouter.post("/", initHandler.init);

module.exports = initRouter;
