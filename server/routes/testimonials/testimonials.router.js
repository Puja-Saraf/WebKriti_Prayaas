const express = require("express");
const {
  getAllTestimonials,
  getSingleTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("./testimonials.controller");
const testimonialRouter = express.Router();
testimonialRouter.get("/stories/", getAllTestimonials);
testimonialRouter.get("/story/", getSingleTestimonial);
testimonialRouter.post("/story/", createTestimonial);
testimonialRouter.put("/story/", updateTestimonial);
testimonialRouter.delete("/story/", deleteTestimonial);
module.exports = testimonialRouter;
