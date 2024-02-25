const mongoose = require("mongoose");

async function dbConnection() {
  await mongoose.connect("mongodb+srv://sirah:4Sirah_123@cluster0.zp6wy.mongodb.net/marketplace?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db")
}

dbConnection();
