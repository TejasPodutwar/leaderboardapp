const mongoose = require("mongoose");

const connectDB = () => {
    
    const connectDB =  mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) =>{
        console.log("Connection to the database successful...");
    })
    .catch((err) => {
        console.log("Unable to connect to the db...");
    }) 
}

module.exports = connectDB;