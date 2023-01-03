const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${PORT}`)
})