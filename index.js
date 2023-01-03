var cors = require('cors')

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

const PORT = process.env.PORT || 3000;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors())
app.options("*", cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)