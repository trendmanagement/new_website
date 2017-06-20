'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../utils/db_handler');
var pass_handler = require('../utils/password_handler');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'b.druzhynin@gmail.com',
        pass: 'dinamicka123'
    }
});
/* GET home page. */
router.get('*', function(req, res, next) {

    if (req.url !== '/exos' && req.url !== '/check-auth' && req.url !== '/get-user' && req.url !== '/logout' &&
        req.url !== '/verify-site' && req.url !== '/check-user') {

        if (typeof req.session.user_id == 'undefined' && req.url == '/my-exos') {
            return res.redirect('/home');
        } else {
            return res.sendFile(path.join(__dirname, '../client/index.html'));
        }
    } else {
        next();
    }
});

// get auth state 
router.get('/check-auth', function(req, res) {

    if (typeof req.session.user_id == 'undefined' || !req.session.user_id) {
        res.status(401).send('NO AUTH');
    } else {
        var uid = req.session.user_id;
        res.status(200).json({ uid: uid });
    }
});

// get user data
router.get('/get-user', function(req, res) {

    if (typeof req.session.user_id != 'undefined') {
        var data = {
            uid: req.session.user_id
        };
        res.status(200).json(data);
    } else {
        res.status(401).redirect('/login');
    }
});

// signup 
router.post('/signup', function(req, res) {
    console.log(req.body);

    var hash = pass_handler.hashPassword(req.body.pass);
    var data = Object.assign({}, req.body, { hash: hash });
    console.log('DATA', data);

    db.createUser(data).then(function(user) {
        console.log('SUCCESS SIGNUP', user);
        req.session.username = user[0].email;
        req.session.user_id = user[0].user_id;
        req.session.save(function(err) {
            if (err) console.log(err);
            else console.log('SESSION SAVED');
            res.cookie(req.session.cookie);
            res.status(200).send('OK');
            //console.log(req.session)
        });
    }).catch(function(err) {
        if (err == 'User exists') {
            res.status(422).json({ error: 'user exists' });
        } else {
            console.log('SIGNUP ERROR', err);
            res.status(400).json({ error: 'signup error' });
        }
    });
});

// login 
router.post('/login', function(req, res) {

    var name = req.body.email;
    var pass = pass_handler.hashPassword(req.body.pass);

    db.loginUser(name, pass).then(function(user) {
        console.log('SUCCESS LOGIN', name, pass, user);
        req.session.username = user[0].email;
        req.session.user_id = user[0].user_id;
        req.session.save(function(err) {
            if (err) console.log(err);
            else console.log('SESSION SAVED');
            res.cookie(req.session.cookie);
            res.status(200).send('OK');
            // res.redirect('/my-exos'); 

            // console.log(req.session)
        });
    }).catch(function(err) {
        console.log('LOGIN ERROR', err);
        if (err == 'password' || err == 'email') {
            res.status(200).json({ error: err });
        }
    });
});

// logout 
router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            return res.status(400).send('failed to logout');
        } else {
            return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
        }
    });
});

//Forgot password
router.post('/check-user', function(req, res) {
    db.didUserExist(req.body.email).then(
        resolve => {
            transporter.sendMail({
                from: '"TMQREXO" <no-replay@tmqrexo.com>',
                to: req.body.email,
                subject: 'Password Remind',
                html: '<b>Test</b>'
            }, (error, info) => {
                if (error) {
                    res.status(400).json({ sendEmail: false });
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                res.status(400).json({ sendEmail: true });
            });
        },
        error => {
            res.status(400).json({ redirected: false, ans: error })
        }
    )

})

// get user exos 
router.get('/exos', function(req, res) {
    var id = req.session.user_id;
    console.log('UID FOR EXOS', id);

    db.getExos(id).then(function(exos) {
        console.log('EXOS RETRIEVED', exos);
        res.status(200).json(exos);
    }).catch(function(err) {
        console.log('EXO GET ERR', err);
        res.status(400).send('get exos error');
    });
});

// add new exo to user exos 
router.post('/exos', function(req, res) {
    var data = req.body;
    var uid = req.session.user_id;
    console.log('ADD EXO', data, uid);

    db.addExo(uid, data).then(function(affected) {
        res.status(200).send('success');
    }).catch(function(err) {
        console.log(err);
        res.status(400).send('error');
    });
});

// delete exo by id
router.delete('/exos', function(req, res) {

    var id = req.body.id;
    console.log('EXO ID TO DELETE', id);

    db.deleteExo(id).then(function() {
        res.status(200).send('success');
    }).catch(function(err) {
        console.log('EXO DELETE ERR', err);
        res.status(400).send('error');
    });
});

module.exports = router;