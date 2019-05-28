'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_CONFIG: {
    apiKey: '"apiKey"',
    authDomain: '"firebaseapp.com"',
    databaseURL: '"https://firebaseio.com"',
    projectId: '"Side project ay"',
    storageBucket: '"Side project a.appspot.com"',
    messagingSenderId: '"Side project A number"'
  },
  KakaoAPI: '"https://kapi.kakao.com"',
  KakaoKey: '"kakaoKey"'
})
