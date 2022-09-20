const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


// middlewares...
app.use(express.json());
app.use(cors());

// Routes--->
const tourRoute = require('./routes/tour.route');
const trendingRoute = require('./routes/trending.route');
const cheapestRoute = require('./routes/cheapest.route');

// Getting trending route
app.use("/api/v1/tours/trending", trendingRoute);

// Getting cheapest route
app.use("/api/v1/tours/cheapest", cheapestRoute);

// Hitting api
app.use("/api/v1/tours", tourRoute);

module.exports = app;