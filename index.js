require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');
const router = require('./routes');

const app = express();


// app.enable('trust proxy');


// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Cookie parser
app.use(cookieParser());


// Templates
app.engine('mst', mustacheExpress(path.join(__dirname, 'src/views/partials')));
app.set('view engine', 'mst');
app.set('views', path.join(__dirname, 'src/views'));


// Static app loading
app.use(express.static(path.join(__dirname, 'src'))); // Development
// app.use(express.static(path.join(__dirname, 'public'))); // Production

// Routes
app.use(router);


const PORT = process.env.PORT || '8080';
app.listen(PORT, 'localhost', () => {
  console.log(`Server running on port: ${process.env.PORT}`);
  console.log('Press Ctrl+C to quit.');
});
