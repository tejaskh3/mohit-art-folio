const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const artwork = require('./router/artwork');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
app.use(bodyParser.json());
// app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/dashboard', artwork);
app.use('/api/v1', (req, res) => res.send('hi'));
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listneing port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
