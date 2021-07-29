require("dotenv").config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const http = require('http');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const appRoutes = require('./routes/appRoutes');
const authRoutes = require('./routes/auth');
const cors = require('cors')

mongoose.connect('mongodb://localhost/', {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', appRoutes);
app.use('/api/user', authRoutes);

http.createServer(app).listen(port);

console.log("Backend is running on port:", port);
