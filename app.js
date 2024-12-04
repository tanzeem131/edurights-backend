const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const enquiryRoutes = require("./routes/enquiry");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://edurights-consultancy.netlify.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
