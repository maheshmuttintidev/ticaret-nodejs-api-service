const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByPhoneNumber, getUserById) {
    const authenticateUser = async (phoneNumber, password, done) => {
        const user = getUserByPhoneNumber(phoneNumber)
        if(user === null) {
            return done(null, false, {
                message: "Please Register.This number isn't registered yet..!"
            })
        }
        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {
                    message: "Password incorrect..!"
                })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'phoneNumber', authenticateUser}))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize