'use strict';

var mysql = require('mysql');
var dbconfig = require('./db_connection').config;
var pool = mysql.createPool(dbconfig);

var getUser = function getUser(id) {
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            if (err || typeof connection == 'undefined' || !connection) {
                return reject(err);
            }

            var sql = 'SELECT * FROM `users` WHERE user_id = ?';
            connection.query(sql, [id], function(err, rows) {
                connection.release();
                if (err) {
                    return reject(err);
                }

                resolve(rows);
            });
        });
    });
};

module.exports = {

    pool: pool,
    // get user 
    getUser: getUser,

    // get user exos 
    getExos: function getExos(uid) {

        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }

                var sql = 'SELECT * from `exos` WHERE user_id = ?';
                connection.query(sql, [uid], function(err, rows) {
                    connection.release();
                    if (err) reject(err);

                    resolve(rows);
                });
            });
        });
    },

    // add exo to user exos 
    addExo: function addExo(uid, exo_data) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var id = '_' + Math.random().toString(36).substr(2, 9);
                var sql = 'INSERT INTO `exos` (exo_id, exo_name, starting_date, end_date, max_delta, total_number_of_trades, total_cost, avg_delta, max_drawdown, starting_value, end_value, description, user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                connection.query(sql, [id, exo_data.name, exo_data.starting_date, exo_data.end_date, exo_data.max_delta, exo_data.total_number_of_trades, exo_data.total_cost, exo_data.average_delta, exo_data.max_drawdown, exo_data.starting_value, exo_data.end_value, exo_data.description, uid], function(err, rows) {
                    connection.release();
                    if (err) reject(err);
                    else {

                        resolve(rows);
                    }
                });
            });
        });
    },

    deleteExo: function deleteExo(id) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }

                var sql = 'DELETE FROM `exos` WHERE exo_id = ?';
                connection.query(sql, [id], function(err, rows) {
                    connection.release();
                    if (err) reject(err);
                    resolve(rows);
                });
            });
        });
    },

    // create user 
    createUser: function createUser(data) {

        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }

                var id = '_' + Math.random().toString(36).substr(2, 9);
                var want_info = data.want_info ? 1 : 0;
                var sql = 'INSERT INTO users (user_id, \n                    first_name, last_name, password, email, \n                    employees, informed, company_name, \n                    phone, detail, want_info) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

                connection.query(sql, [id, data.firstName, data.lastName, data.hash, data.workEmail, data.employVal, data.comeFromVal, data.companyName, data.phone, data.detail, want_info], function(err, rows) {

                    connection.release();
                    if (err) reject('User exists');
                    getUser(id).then(function(user) {
                        return resolve(user);
                    }).catch(function(err) {
                        return reject(err);
                    });
                });
            });
        });
    },

    // delete user 
    deleteUser: function deleteUser(id) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                } else {
                    var sql = 'DELETE FROM `users` WHERE user_id = ?';
                    connection.query(sql, [id], function(err, rows) {
                        connection.release();
                        if (err) reject('Faied to delete user');
                        else {
                            resolve(id);
                        }
                    });
                }
            });
        });
    },

    // log user in
    loginUser: function loginUser(name, pass) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'SELECT * FROM `users` WHERE email = ?';
                connection.query(sql, [name], function(err, rows) {
                    if (err || rows.length == 0) {
                        connection.release();
                        reject('email');
                    } else {
                        var _sql = 'SELECT * FROM `users` WHERE (email = ?) AND (password = ?)';

                        connection.query(_sql, [name, pass], function(err, rows) {
                            connection.release();
                            if (err || rows.length == 0) reject('password');
                            else {

                                resolve(rows);
                            }
                        });
                    }
                });
            });
        });
    },
    didUserExist: function didUserExist(email) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'SELECT * FROM `users` WHERE `email` = "' + email + '"';
                connection.query(sql, function(err, rows) {
                    connection.release();
                    if (err) reject(err);
                    resolve(rows);
                });
            });
        });
    },
    registerHash: function registerHash(user_id, email, hash) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'INSERT INTO hash_store (user_id, email, token_hash) values (?,?,?)';
                connection.query(sql, [user_id, email, hash], function(err, rows) {
                    connection.release();
                    if (err) { reject('exist already');
                        console.log("from 'registerHash' - : ", err) }
                    console.log("from 'registerHash' + : ", user_id)
                    resolve(user_id);

                });
            });
        });
    },
    cleareHash: function cleareHash(user_id) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'DELETE FROM hash_store WHERE user_id = ?';
                connection.query(sql, [user_id], function(err, rows) {
                    connection.release();
                    if (err) reject(err);
                    resolve(user_id);
                });
            });
        });
    },
    checkHash: function checkHash(hash) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'SELECT * FROM hash_store WHERE `token_hash` = ?';
                connection.query(sql, [hash], function(err, rows) {
                    connection.release();
                    if (err || rows.length == 0) reject('expired');
                    resolve(rows);
                });
            });
        });
    },
    updatePass: function updatePass(user_id,pass) {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if (err || typeof connection == 'undefined' || !connection) {
                    return reject(err);
                }
                var sql = 'UPDATE users SET password = ? WHERE user_id = ?';
                connection.query(sql, [pass,user_id], function(err, rows) {
                    connection.release();
                    if (err || rows.length == 0) reject('error');
                    resolve(user_id);
                });
            });
        });
    }
};