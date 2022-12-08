const bcrypt = require('bcrypt')
const users = require('./routes/register')
const LocalStrategy = require('passport-local').Strategy

function initilize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'email not found' })
        }

        try {
            if (await bcrypt.compare(password, users.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Wrong password' })

            }
        } catch (e) {
            return done(e)
        }

    }

    passport.use(new LocalStrategy({
        usernameField: 'email',
    },
        authenticateUser
    ));
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}
module.exports = initilize;

