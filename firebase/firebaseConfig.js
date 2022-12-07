import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBuRoj9zNAqw3L-B1liyUZIzv0VlWcrOn4',
  authDomain: 'eat-now-admin.firebaseapp.com',
  projectId: 'eat-now-admin',
  storageBucket: 'eat-now-admin.appspot.com',
  messagingSenderId: '952690495710',
  appId: '1:952690495710:web:1be43d30de328e85b1b24f',
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
