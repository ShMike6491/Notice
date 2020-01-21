const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Routes link
const notesRouter = require('./routes/notes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Extentions
app.use(cors());
app.use(express.json());

//MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//Routes path
app.use('/', notesRouter);

app.listen(port, () => {
  console.log('Server is running on port:' + port);
});
