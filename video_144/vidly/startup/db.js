const mongoose = require("mongoose");
const Fawn = require("fawn");
const fawnMongoose = require("fawn/node_modules/mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => {
      console.log("Connected to MongoDB...");
      try {
        Fawn.init(fawnMongoose);
        console.log("Fawn transaction support initialized.");
      } catch (err) {
        console.error("Failed to initialize Fawn with mongoose.", err);
      }
    })
    .catch((err) => console.error("Could not connect to MongoDB...", err));
};
