const User = require('../models/User')

exports.home = function(req, res){

}



exports.register = function(req, res){
    let user = new User(req.body)
    user.register()
    if(user.errors.length){
        res.send(user.errors)
    } else {
        res.send("congrats, there are no errors.")
    }
}


exports.home = function(req, res){
    res.render('home-guest')
} 