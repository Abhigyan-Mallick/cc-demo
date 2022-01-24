const express = require('express');
const bodyParser = require("body-parser");
const connectDb = require('./src/config/connection');
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', async (req, res) => {
  res.send('CC Demo Server is running.\n');
});

require("./src/route/dynamicForm")(app);
require("./src/route/formData")(app);

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDB connected');
  });
});
