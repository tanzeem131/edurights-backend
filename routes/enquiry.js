const express = require("express");
const router = express.Router();
const enquiryController = require("../controllers/enquiryController");
const enquiryLimiter = require("../middlewares/enquiryLimiter");

router.post("/submit", enquiryLimiter, enquiryController.submitEnquiry);

module.exports = router;
