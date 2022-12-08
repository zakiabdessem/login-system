const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

router.use(express.urlencoded({ extended: false }))

const users = []

router.get('/', (req, res) => {
    res.render('register.ejs')

})


router.post('/', (req, res) => {

    const password = req.body.password

    bcrypt.hash(password, 10, (err, hash) => {
        try {
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            res.redirect('/login')
        } catch (err) {
            res.redirect('/register')
        }
        console.log(users)
    })


})






module.exports = router, users;

