const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const feedbackRoutes = require('./routes/feedback')
const contactRoutes = require('./routes/ContactPosts')
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use((req,res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Authorization');
    next();
});
app.use("/feedback", feedbackRoutes);
app.use("/contact", contactRoutes);

mongoose.connect('mongodb+srv://Matthew:bKJKDK8DFxA7Ls8@cluster0.a8tvs.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000);
        console.log("Connected to MDB");
})
    .catch((err) =>
        console.log(err));
