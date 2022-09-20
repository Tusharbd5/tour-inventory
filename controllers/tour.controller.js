const { getAllTourService, createTourService, updateATourService, getSpeceficTourService, getTrendingTourService, getCheapestTourService } = require("../services/tour.services");

// Getting all tours controller..
exports.getTours = async (req, res, next) => {
    try {
        const filter = { ...req.query };

        // Sort --> Exclude some query elements..
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete filter[field]);

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }

        if (req.query.page) {
            const { page = 1, limit = 2 } = req.query;

            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const tour = await getAllTourService(queries);

        res.status(200).json({
            status: 'success',
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not get data',
            error: error.message
        })
    }
}

// Posting a tour controller..
exports.createTour = async (req, res, next) => {

    try {
        const result = await createTourService(req.body);
        // const tour = new Tour(req.body);

        // const result = await tour.save();

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not inserted',
            error: error.message
        })
    }
}

// Getting a specefic tour..
exports.getATour = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tour = await getSpeceficTourService(id);

        res.status(200).json({
            status: 'success',
            message: 'Reached tour successfully',
            data: tour
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Can not reach data..',
            error: error.message
        })
    }
}

// Updating a Tour..
exports.updateATour = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateATourService(id, req.body);

        res.status(200).json({
            status: 'success',
            message: 'Tour successfully updated',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not updated',
            error: error.message
        })
    }
}

// Getting trending Tour
exports.getTrendingTour = async (req, res, next) => {
    try {
        const tour = await getTrendingTourService();

        res.status(200).json({
            status: 'success',
            message: 'Reached tour successfully',
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not get data',
            error: error.message
        })
    }
}

// Getting cheapest Tour
exports.getCheapestTour = async (req, res, next) => {
    try {
        const tour = await getCheapestTourService();

        res.status(200).json({
            status: 'success',
            message: 'Reached tour successfully',
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not get data',
            error: error.message
        })
    }
}