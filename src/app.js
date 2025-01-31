const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
    app.use(cors());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(express.json());


app.use("api/v1/books", bookRoutes);

module.exports = app;
