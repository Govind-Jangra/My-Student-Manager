var dotenv = require("dotenv");
dotenv.config();
var mongoose = require("mongoose");

const connectToMongo = 
mongoose.connect(process.env.DB).then(()=>{
  console.log("Connected to Mongo")
}).catch(()=>{
  console.log("Failed to connect")
})

