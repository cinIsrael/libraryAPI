const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");
const rateLimiter =require("./middleware/rateLimiter");
const validateRequest = require("./middlewares/validateRequest");

const app = express();
    app.use(cors());
    app.use(helmet());
    app.use(morgan());
    app.use(express.json());
    app.use(rateLimiter());
    app.use(validateRequest());

app.use("api/v1/books", bookRoutes);

module.exports = app;
