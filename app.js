const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const enquiryRoutes = require("./routes/enquiry");

app.use(bodyParser.json());
app.use(cors());

const allowedOrigins = [
  "http://localhost:3000",
  "https://edurights-consultancy.netlify.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS", "PATCH", "PUT"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
