'use strict';

var md5 = require('md5');

module.exports = {
    hashPassword: function hashPassword(pass) {
        return md5(pass);
    }
};