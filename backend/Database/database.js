require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
      `mongodb://localhost:27017`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB