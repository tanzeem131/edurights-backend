// const express = require("express");
// const router = express.Router();
// const enquiryController = require("../controllers/enquiryController");

// // router.post("/submit", enquiryController.submitEnquiry);

// router.get("/submit", (req, res) => {
//   res.send("This route only supports POST requests.");
// });

// module.exports = router;

// enquiry.js

const express = require("express");
const router = express.Router();
const enquiryController = require("../controllers/enquiryController");

// Handle GET request for /api/enquiry
router.get("/", (req, res) => {
  res.send(
    "Welcome to the Enquiry API. Use POST /submit to submit an enquiry."
  );
});

// Handle POST request for /api/enquiry/submit
router.post("/submit", enquiryController.submitEnquiry);

// Optional: Handle GET request for /api/enquiry/submit
router.get("/submit", (req, res) => {
  res.send("This route only supports POST requests.");
});

module.exports = router;
