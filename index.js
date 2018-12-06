require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();


app.use(express.static('app'));
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(cookieParser());


const PORT = process.env.PORT || 8080;
app.listen(PORT, 'localhost', () => {
  console.log(`Server running on port: ${process.env.PORT}`);
  console.log('Press Ctrl+C to quit.');
});
