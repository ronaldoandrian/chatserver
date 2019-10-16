var user = require('../model/userModel.js');

exports.test_login = function (req, res) {
    user.test_login(function (err, user) {
        res.header("Access-Control-Allow-Origin", "*");
        if (err)
            res.status(400).send({ error: true, message: err.sqlMessage });
        else
            res.send(user);
    });
};

exports.test_get = function (req, res) {
    console.log(req.body);
    res.send("GOTCHA NIGGA! PEACE :)");
}