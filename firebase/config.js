import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCt67-AOQQnT29gc1kZ4XRkBs3m5pDxjpM',
  authDomain: 'waralobby.firebaseapp.com',
  projectId: 'waralobby',
  storageBucket: 'waralobby.appspot.com',
  messagingSenderId: '248200457691',
  appId: '1:248200457691:web:972f3b727aa4588ccecbfe'
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
