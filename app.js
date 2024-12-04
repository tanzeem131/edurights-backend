const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const enquiryRoutes = require("./routes/enquiry");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
