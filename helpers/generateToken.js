const jwt = require("jsonwebtoken")

const generateToken = (res, id, mobileNumber) => {
    const expiration = process.env.DB_ENV === "testing" ? 100 : 604800000
    const token = jwt.sign(
        { id, mobileNumber }, 'tanuja@143', {
        expiresIn: process.env.DB_ENV === "testing" ? "1d" : "7d",
    }
    )
    return res.cookie('token', token, {
        expires: new Date(Date.now() + expiration),
        secure: false,
        httpOnly: true
    })
}

module.exports = generateToken