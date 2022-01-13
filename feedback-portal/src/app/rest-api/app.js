const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

app.use((req,res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Authorization');
});

mongoose.connect('mongodb+srv://Matthew:lzAM9q3WEb1Ts6PK@cluster0.a8tvs.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000);
        console.log("Connected to MDB");
})
    .catch((err) => {
        console.log(err);
    });
