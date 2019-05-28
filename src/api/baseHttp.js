import axios from 'axios'
// import {defaultAuth} from '@/library/firebase'
/*
https://www.npmjs.com/package/axios2
var instance = axios.create({
  baseURL: 'https://api.example.com'
});
// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
*/

export default class BaseHttp {
  constructor() {
    this._axios = axios
    this._axios.defaults.baseURL = process.env.KakaoAPI
    this._axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    this._axios.defaults.timeout = 5000
    this._params = ''
    this._baseUrl = ''
    this._childPath = ''
  }

  set baseUrl(value) {
    this._baseUrl = value
  }

  get baseUrl() {
    return this._baseUrl
  }

  set childPath(value) {
    this._childPath = value
  }

  get childPath() {
    return this._childPath
  }

  get params() {
    return this._params
  }

  set params(value) {
    this._params = value
  }

  async setupToken() {
    // if (.currentUser !== null) {
    //   await defaultAuth.currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
    //     // Send token to your backend via HTTPS
    //     this._axios.defaults.headers.Authorization = 'Bearer ' + idToken
    //   }).catch((error) => {
    //     // Handle error
    //     console.log(error)
    //   })
    // }
  }

  get() {
    return this.setupToken().then(() => {
      return this._axios.get(this.getUrl(), this.params).then((r) => {
        return r.data.data
      }).catch((e) => {
        console.error(this.getUrl() +
          ' \n--------[ Method "get" error in  baseHttp ]-------- \n',
          e)
        return ''
      })
    })
  }

  post() {
    return this.setupToken().then(() => {
      return this._axios.post(this.getUrl(), this.params).then((r) => {
        return r
      }).catch((e) => {
        console.error(this.getUrl() +
          ' \n--------[ Method "post" error in  baseHttp ]-------- \n',
          e)
        return ''
      })
    })
  }

  put() {
    return this.setupToken().then(() => {
      return this._axios.put(this.getUrl(), this.params).then((r) => {
        return r
      }).catch((e) => {
        console.error(this.getUrl() +
          ' \n--------[ Method "put" error in  baseHttp ]-------- \n',
          e)
        return ''
      })
    })
  }

  delete() {
    this.setupToken().then(() => {
      return this._axios.delete(this.getUrl(), this.params).then((r) => {
        return r
      }).catch((e) => {
        console.error(this.getUrl() +
          ' \n--------[ Method "delete" error in  baseHttp ]-------- \n',
          e)
        return ''
      })
    })
  }

  getUrl() {
    if (this.childPath === '') {
      return this.baseUrl
    } else {
      return this.baseUrl + '/' + this.childPath
    }
  }
}
