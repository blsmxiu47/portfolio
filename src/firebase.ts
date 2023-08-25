import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const config = {
  apiKey: "AIzaSyC8KzsHx0ki35NTLtUN5vomerknL7tFnC4",
  authDomain: "blsmxiu47-portfolio.firebaseapp.com",
  projectId: "blsmxiu47-portfolio",
  storageBucket: "blsmxiu47-portfolio.appspot.com",
  messagingSenderId: "944337824368",
  appId: "1:944337824368:web:6507ca0672f929f26d62b5",
  measurementId: "G-LM4LNNDHMQ"
}
const app = initializeApp(config)
const database = getDatabase(app)

export const messagesRef = ref(database, "messages")