const axios = require("axios");
const { apiUrl } = require("../config/config");

exports.submitEnquiry = async (req, res) => {
  try {
    const response = await axios.post(apiUrl, { data: req.body });
    if (response.status === 201) {
      res.status(201).json({ message: "Form data submitted successfully" });
    } else {
      res.status(response.status).json({ error: "Failed to submit form data" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
