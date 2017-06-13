'use strict';

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var pool = require('./db_handler').pool;

var storeConfig = {

  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }

};

var store = new MySQLStore(storeConfig, pool);

module.exports = {
  createStore: function createStore() {
    return store;
  },
  closeStore: function closeStore() {
    store.close();
  }
};