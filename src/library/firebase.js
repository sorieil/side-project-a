import * as firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp(process.env.FIREBASE_CONFIG)

export let defaultAuth = firebase.auth()
export let defaultStore = firebase.firestore()
export let defaultStorage = firebase.storage()
export let serverTime = firebase.firestore.FieldValue.serverTimestamp()
export {
    firebase
}
