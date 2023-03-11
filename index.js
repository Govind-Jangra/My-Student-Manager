var dotenv = require("dotenv");
dotenv.config();
var eventl = require("events");
eventl.EventEmitter.defaultMaxListeners = 20;
var express = require("express");
var cors = require("cors");
require("./config/db.js");
var userRoutes = require("./routes/user.js");
var app = express();
var PORT = process.env.PORT || 9000;
var path = require("path");


// apply middleware
app.use(express.json());

// cors
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("api is running");
// });

// routes
app.use("/api/v1", userRoutes);

// serve static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

//connection
app.listen(PORT, () => {
  console.log(`Api is running on http://localhost:${PORT}`);
});
