'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_CONFIG: {
    apiKey: '"AIzaSyAcKvihKFtbDVVPTuZyMLhZGPxBt1IlaCY"',
    authDomain: '"skin-silmary.firebaseapp.com"',
    databaseURL: '"https://skin-silmary.firebaseio.com"',
    projectId: '"skin-silmary"',
    storageBucket: '"skin-silmary.appspot.com"',
    messagingSenderId: '"680277168870"'
  }
})
