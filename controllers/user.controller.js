const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.registerUser = (req, res) => {
    console.log(req.body)
    const userData = req.body
    
    bcrypt.hash(userData.password, 10).then(hashedPassword => {
        var doc = new UserModel({
            fullName: userData.fullName,
            password: hashedPassword,
            phoneNumber: userData.phoneNumber
        })

        doc.save((err, doc) => {
            if(err) {
                res.send(err)
            } else {
                var payload = {
                    subject: doc._id
                }
                var token = jwt.sign(payload, '7&2dsq3sss88we#12jjs823Sewr234')
                res.status(200).send({userId: doc._id,token: token, name: doc.fullName})
            }
        })
    })
}

exports.loginUser = (req, res) => {
    const userData = req.body
    UserModel.findOne({phoneNumber: userData.phoneNumber}, (err, doc) => {
        if(err) {
            res.send({
                err: err.message
            })
            console.log(err)
        } else {
            if(doc) {
                console.log("check result", bcrypt.compare(userData.password, doc.password))
                bcrypt.compare(userData.password, doc.password).then(result => {
                    if(result) {
                        const payload = {
                            subject: doc._id
                        }

                        const token = jwt.sign(payload, '7&2dsq3sss88we#12jjs823Sewr234')

                        res.status(200).send({userId: doc._id,token: token, name: doc.fullName})
                    } else {
                        res.send({
                            message: "Password is incorrect"
                        })
                    }
                })
            } else {
                res.send({
                    message: "phone number is not registered"
                })
            }
        }
    })
}

