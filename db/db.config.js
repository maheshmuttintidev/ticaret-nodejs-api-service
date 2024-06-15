const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI = 'mongodb://localhost/newusers'

exports.connectDB = async () => {
  try {
    const results = await mongoose.connect(MONGO_URI, {
    //   useCreateIndex: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    });
    console.log("Connected to Mongoose", results);
  } catch (error) {
    console.log("error while connecting to MongoDB", error);
  }
};
