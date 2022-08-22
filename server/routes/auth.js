const express = require('express');
const router = express.Router();
const { Joi, validate } = require('express-validation');
const md5 = require('md5');

const User = require('../models/user');

/**
 * API: /auth/login
 */
router.post("/login", validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}, {}, {}), function (req, res, next) {
    const {
        email,
        password
    } = req.body;

    if (email === "pufferdev@gmail.com") {
        if (password === "123456") {
            res.json({status: "success"});
        }
        else {
            res.json({status: "password_error"});
        }
    }
    else {
        res.json({ status: 'email_error' });
    }
});

router.post("/test", async function (req, res, next) {
    await User.create({
        email: "happy",
        password: "asa"
    });
    res.send("ok");
});

/**
 * API: /auth/register
 * Type: POST
 */
router.post("/register", validate({
    body: Joi.object({
        firstName: Joi.string().min(3).max(255).required(),
        lastName: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{8,255}/).required()
    })
}, {}, {}), async function (req, res, next) {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const existOne = await User.findOne({
            email: email
        });
        if (existOne) {
            return res.json({
                status: false,
                message: "Already exist"
            });
        }
    
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = md5(password);
    
        await user.save();
    
        res.json({
            status: true,
            message: "Success"
        });
    }
    catch (e) {
        res.json({
            status: false,
            message: e.message
        });
    }
});

module.exports = router;