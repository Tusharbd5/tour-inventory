const mongoose = require("mongoose");

// Schema design
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide a Name for Tour.."],
        trim: true,
        unique: [true, "Name Must be Unique.."],
        minLength: [5, "Tour Name Must be 5 Characters or Above.."],
        maxLength: [100, "Tour Name is too Large"]
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        minLength: [11, "Contact Number is Invalid.."],
        maxLength: [11, "Contact Number is Invalid.."]
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minLength: [10, "Address must be above 10 character.."]
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negetive.."]
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["Online", "Offline", "Discontinued"],
            message: "Status can't be {VALUE}"
        }
    },
    view: {
        type: Number,
        default: 0,
        min: [0, "View can not negetive.."],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                }
                else {
                    return false;
                }
            }

        },
        message: "view must be an integer.."
    }
}, {
    timestamps: true
})

// Creating Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;