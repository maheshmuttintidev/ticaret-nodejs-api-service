const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        unique: true,
        required: true,
        index: true
    }
})

module.exports = mongoose.model('registeredUsers', UserSchema)