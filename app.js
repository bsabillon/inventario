const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const database = require('./configuration/database');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=> res.send('Sucess'));

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, console.log(`Server started on port ${PORT}`));
