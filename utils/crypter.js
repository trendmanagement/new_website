var crypto = require('crypto'),
    algorithm = 'aes-256-ctr'
module.exports = {
    encodeMD5: function encodeMD5(value) {
        var cipher = crypto.createCipher(algorithm, value)
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;
    },
    decodeMD5: function decodeMD5(value) {
        var decipher = crypto.createDecipher(algorithm, value)
        var dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;
    }
};