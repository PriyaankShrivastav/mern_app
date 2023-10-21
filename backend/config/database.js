const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((data) =>{
        console.log(`MongoDB connected to server: ${data.connection.host}`);
    })
    // .catch ((err) => { // removed this catch since unhandled promise rejection is already taken care in server.js
    // console.log(err);
    // })
}

module.exports = connectDatabase