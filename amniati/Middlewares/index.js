const User = require("../Model/Admin");
exports.IsLogin = async (req, res, next) => {
    const email = req.cookies.email;
    const password = req.cookies.password;

    if (email === undefined || password === undefined)
        return res.cookie('errors', [
            "برای دسترسی ورود لازم است."
        ]).redirect('/login');

    const user = await User.findOne({
        email,
        password
    });
    if (!user) {
        return res.cookie('errors', [
            "برای دسترسی ورود لازم است."
        ]).redirect('/login');
    }
    req.user = user;
    next();
}