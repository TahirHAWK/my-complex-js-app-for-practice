const validator = require("validator")

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.validate = function() {
    if (this.data.username == "") {
        this.errors.push("You must provide a username:")
    }
    if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("username can only contain letters and numbers.")
    }
    if (!validator.isEmail(this.data.email)) {
        this.errors.push("You must provide a valid email address:")
    }
    if (this.data.password == "") {
        this.errors.push("You must provide a valid password:")
    }
    if(this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("password must be at least 12 characters.")
    }
    if(this.data.password.length > 100) {this.errors.push("cannot exceed 100 characters.")}
    
    if(this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("username must be at least 3 characters.")
    }
    if(this.data.password.lenghth > 30) {this.errors.push("cannot exceed 30 characters.")}
}

User.prototype.register = function(){
    //step 1: validate user data
    this.validate()
    //step 2: only if there are no validation errors
    //then save the user data into a database

}

module.exports = User