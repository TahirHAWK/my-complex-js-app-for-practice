const User = require('../models/User')

exports.home = function(req, res){

}



exports.register = function(req, res){
    let user = new User(req.body)
    user.register()
    res.send("thanks for trying to register")
}


exports.home = function(req, res){
    res.render('home-guest')
} 