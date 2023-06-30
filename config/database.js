require('dotenv').config();
const mongoose = require("mongoose");

const MongoDBConnect = () => {
  const conn_str = process.env.MONGO_URL;
  mongoose
    .connect(
      conn_str,
      (connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    )
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
module.exports = MongoDBConnect;