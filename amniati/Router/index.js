const Router = require('express').Router();
const User = require('../Model/Admin');
const config = require('../config.json');
const mids = require('../Middlewares/index');

function getC(req, res) {
    let cookie = req.cookies.errors;
    if (cookie === undefined) {
        return [];
    }
    res.cookie('errors', []);
    return cookie;

}

Router.get('/', mids.IsLogin,(req,res)=>{
    res.send("ok");
});

Router.get('/login', (req, res) => {
    res.render('login', {
        errors: getC(req, res)
    });
});

Router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
        email,
        password
    });
    if (!user) {
        return res.cookie('errors', [
            "نام کاربری یا رمز عبور اشتباه است."
        ]).redirect('/login');
    }
    res.cookie('email', email).cookie('password', password).redirect('/');
});

module.exports = Router;