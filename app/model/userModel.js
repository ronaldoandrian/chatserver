'user strict';

//User object constructor
var User = function(user){
    this.name = user.name;
    this.mail = user.mail;
    this.password = user.password;
};

User.test_login = function test_login(user, result) {    
    return user;
};

module.exports= User;