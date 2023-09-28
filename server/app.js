const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const router = require('./router/artwork');
const port = 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.json());
// app.use(bodyParser.json());
app.use('/api/v1', router);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
