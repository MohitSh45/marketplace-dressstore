const mongoose = require("mongoose");

async function dbConnection() {
  await mongoose.connect("mongodb+srv://mohit:u4XdUxlO2XYDlHQM@cluster0.ch7puud.mongodb.net/marketplace?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db")
}

dbConnection();
