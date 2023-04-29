const express = require("express");
const payementRouter = require("./payements/payement.router");
const app = require("../app");
const authRouter = require("./auth/auth.router");
const storyRouter = require("./stories/stories.router");
const eventRouter = require("./events/events.router");

const apiRouter = express.Router();
apiRouter.use("/payements", payementRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/stories", storyRouter);
apiRouter.use("/events", eventRouter);
module.exports = apiRouter;
