const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const MongoUtils = require('../../db/connection')
const db = MongoUtils.getDb()
const dbActions = require('../../db/Actions')

passport.use(new LocalStrategy(

  function(username, password, done) {
      console.log(username, password)
    db({ username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }

));