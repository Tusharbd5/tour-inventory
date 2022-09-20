const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour.controller');

router.route('/')
    .get(tourController.getTrendingTour)

module.exports = router;