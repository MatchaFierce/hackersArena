require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.use('/', router);

app.listen(process.env.PORT, () => console.log('Server running on port: ${process.env.PORT}');
