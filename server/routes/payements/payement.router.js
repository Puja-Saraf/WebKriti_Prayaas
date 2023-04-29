const express = require("express");
const { checkout } = require("./payement.controller");
const payementRouter = express.Router();
payementRouter.get("/checkout", checkout);
module.exports = payementRouter;
