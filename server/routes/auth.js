var express = require('express');
var router = express.Router();
var { Joi, validate } = require('express-validation');

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

    if(email === "pufferdev@gmail.com"){
        if(password === "123456"){
            res.json({status: "success"});
        }else{
            res.json({status: "password_error"});
        }
    }else{
        res.json({ status: 'email_error' });
    }

});

module.exports = router;