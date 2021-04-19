const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan")
const bodyparser = require("body-parser");
const Router = require("./server/routes/routes");
const connectDB = require("./server/database/connection");


const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

//connecting to the database
connectDB();

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");

app.use(express.static("./assets/css"));
app.use(express.static("./assets/imgs"));
 
app.use('/',Router)

app.listen(PORT, ()=> {
    console.log(`Server is up and running at http://localhost:${PORT}`);
})