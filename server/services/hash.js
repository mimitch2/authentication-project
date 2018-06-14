const bcrypt = require("bcrypt-nodejs");

function hash(word,err,done) {
  bcrypt.genSalt(10, function (saltErr, salt) {
    console.log("the salt",salt);
    bcrypt.hash(word, salt, null, function (hashErr, hashedWord) {
      if (hashErr) {
        return err(hashErr);
      }
      return done(hashedWord);
    });
  });
}

function compare(word,hashedWord,done) {
  bcrypt.compare(word, hashedWord,done);
}

exports.hash = hash;
exports.compare = compare;
