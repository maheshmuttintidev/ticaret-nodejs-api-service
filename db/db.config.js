const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://mahesh1234:Tanuja@143@cluster0.54pav.mongodb.net/registersDB?retryWrites=true&w=majority'
// const MONGO_URI = 'mongodb://localhost/newusers'

exports.connectDB = () => {
    mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, err => err ? console.log("error",err) : console.log("connected to MongoDB"))
}
