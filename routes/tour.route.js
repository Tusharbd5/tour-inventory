const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour.controller');

router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)

router.route('/:id')
    .get(tourController.getATour)
    .patch(tourController.updateATour)

module.exports = router;