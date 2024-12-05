const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const enquiryRoutes = require("./routes/enquiry");

app.use(bodyParser.json());
app.use(cors());

const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://edurights-consultancy.netlify.app", // Deployed frontend
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true, // Optional: Allow cookies if needed
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions)); // Handle preflight

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
