var express = require("express"),
bodyParser = require('body-parser'),
app = express(),
cors = require("cors"),
db = require('./database/index');

const middlewares = [
    bodyParser.urlencoded({
      extended: true,
      limit: "50mb",
    }),
    bodyParser.json({
      limit: "50mb",
    }),
  ];  
app.use(middlewares);

// enable cors
app.use(
    cors({
      origin: "*", // constant.host, //Website you wish to allow to connect
      methods: "GET,PUT,POST,DELETE", // Request methods you wish to allow
    })
  );
  app.options("*", cors());

// connect Routes
const routers = require('./routes/index');
app.use("/", routers);

// DB Connection
db.connect();

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
