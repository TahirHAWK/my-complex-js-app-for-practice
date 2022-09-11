const express = require('express')
const app = express()

//Note: using const instead of let helps the programmer to not think about it either it is changed later on by accident or not, if using const and later changed and reassigned another value, JS will throw in an error which will be easier to determine where to debug.
const router = require('./router')


app.use(express.urlencoded({extended: false}))
// Note: its a boilerplate code, no need to memorize. It's basically tells express to add the user submitted data to the request object.
app.use(express.json())


app.use(express.static('public'))
// Note: declaring public folder where the css files and browser side javascript files will be stored.
app.set('views', 'views')
// Note: two parameters of app.set function, first one is fixed 'views' to indicate that you are specifying the views folder and the second parameter is the name of the folder you'll be storing your view/design files in.

app.set('view engine', 'ejs')
// Note: specifying the template engine that we will be using to render the views/designs with the previously specified function where we declared the containing folder of the view/design files.

app.use('/', router)

app.listen(3000, ()=>{
    console.log('-------App is running on port 3000------')
})