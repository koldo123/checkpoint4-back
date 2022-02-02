require("dotenv").config();
const express = require("express");
const { setupRoutes } = require("./src/controllers/index");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
setupRoutes(app);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
