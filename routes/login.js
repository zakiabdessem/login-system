const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
res.render('login.ejs')
})


module.exports = function (passport){
    router.post('/', passport.authenticate('local',{
        successRedirect : "/",
        failureRedirect : "/login",
        failureFlash: true
    }))
    return router;
};