const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/artwork');
const port = 3000;
const path = require('path');
app.use(cors());
require('dotenv').config();
app.use(express.json());

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.post('/api/v1/upload', upload.single('file'), (req, res) => {
  const imageUrl = 'http://localhost:3000/uploads/' + req.file.filename;
  console.log(imageUrl);
  res.json(imageUrl);
});
app.use('/api/v1', router);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, 'localhost', () => {
      console.log(`server is listening port ${port}`);
    });
  } catch (error) {
    console.log('Error starting the server:', error);
  }
};

start();
