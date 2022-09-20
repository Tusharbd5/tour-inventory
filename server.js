const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// Database Connection
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log('Database Connection is Successful');
// })
try {
    mongoose.connect('mongodb+srv://tusharbd5:tanjim.hasan1@cluster0.atokzk2.mongodb.net/?retryWrites=true&w=majority').then(() => {
        console.log('Database Connection is Successful');
    })
} catch (error) {

}

// Server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.blue.bold);
})
