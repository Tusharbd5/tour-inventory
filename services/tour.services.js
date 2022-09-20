const Tour = require("../models/Tour");

exports.getAllTourService = async (query) => {
    const tours = await Tour.find({})
        .skip(query.skip)
        .limit(query.limit)
        .sort(query.sortBy)
        .select(query.fields);
    return tours;
}

exports.getSpeceficTourService = async (tourId) => {
    // const matched = await Tour.findById(tourId);

    const tour = await Tour.findByIdAndUpdate(tourId, {
        $inc: {
            view: 1
        }
    });

    return tour;
}

exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

exports.updateATourService = async (tourId, data) => {
    const result = await Tour.updateOne({ _id: tourId }, { $set: data }, {
        runValidators: true
    });
    return result;
}

exports.getTrendingTourService = async () => {

    const tours = await Tour.find({})
        .sort('-view')
        .limit(3);

    return tours;
}

exports.getCheapestTourService = async () => {
    const tours = await Tour.find({})
        .sort('price')
        .limit(3);

    return tours;
}