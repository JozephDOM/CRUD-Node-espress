const mongoose = require("mongoose");
const dbconnect = () => {
  mongoose.set("strictQuery", true)
  mongoose.connect("mongodb://127.0.0.1:27017/Inventario", {}, (err, res) => {
    if (!err) {
      console.log("Success connection");
    } else {
      console.log("Connection failed");
    }
  });
};

module.exports = dbconnect;