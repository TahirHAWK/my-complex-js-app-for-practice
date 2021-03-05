const express = require('express')
const { Cookie } = require('express-session')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const app = express()

let sessionOptions = session({
    secret: "JavaScript is so cool",
    store: new MongoStore({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}

})

app.use(sessionOptions)
app.use(flash())

app.use(function(req, res, next) {
    res.locals.user = req.session.user
    next()
})

const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app

// {"cookie":{"originalMaxAge":86400000,"expires":"2021-03-03T23:53:59.121Z","httpOnly":true,"path":"/"},"flash":{"errors":["Please try again later."]}}