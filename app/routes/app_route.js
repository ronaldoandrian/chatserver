'use strict';
module.exports = function (app) {
    var user = require('../controller/userController');
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    // login users
    app.route('/login')
        .get(user.test_get)
        .post(user.test_login);
};