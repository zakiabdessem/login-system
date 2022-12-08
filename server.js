if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const ejs = require('ejs')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.set('view-engine', 'ejs')


app.get('/', (req, res) => {
    res.send('main page')
})


//login page
const loginRoute = require('./routes/login')(passport);
app.use('/login', loginRoute)
//register page
const registerRoute = require('./routes/register')
app.use('/register', registerRoute)


const initilizePassport = require('./passport-config')

initilizePassport(passport,
    email =>
        users.find(user.email === email)

)
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}
))

app.use(passport.initialize())
app.use(passport.session())



app.listen('8080', () => {
    console.log("listening to 8080")
})