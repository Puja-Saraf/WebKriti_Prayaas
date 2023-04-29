const express = require("express");
const { checkout } = require("./payment.controller");
const paymentRouter = express.Router();
paymentRouter.get("/pay", checkout);
module.exports = paymentRouter;
