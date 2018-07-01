const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');

mongoose.connect(process.env.MONGODB_URI);

// This line makes the build folder publicly available.
app.use(cors())
app.use(express.static('build'));
app.use(bodyParser.json())
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});