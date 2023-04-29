const express = require("express");
const payementRouter = require("./payements/payement.router");
const authRouter = require("./auth/auth.router");
const storyRouter = require("./stories/stories.router");
const eventRouter = require("./events/events.router");
const testimonialRouter = require("./testimonials/testimonials.router");
const userRouter = require("./user/user.router");

const apiRouter = express.Router();
apiRouter.use("/payements", payementRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/stories", storyRouter);
apiRouter.use("/events", eventRouter);
apiRouter.use("/testimonials", testimonialRouter);
apiRouter.use("/users", userRouter);
module.exports = apiRouter;
