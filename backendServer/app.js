require("dotenv").config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Setting default port for backend to 3000
const http = require('http');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const animalRoutes = require('./routes/animalRoutes');
const authRoutes = require('./routes/auth');
const cors = require('cors')

mongoose.connect('mongodb://localhost/', {useNewUrlParser: true}); // Connecting to mongoD instance with no specific database

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', animalRoutes); // Defining route for animal operations
app.use('/api/user', authRoutes); // Defining route for user operations

http.createServer(app).listen(port); // Creating 
console.log("Backend is running on port:", port);
