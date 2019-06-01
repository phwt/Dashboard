import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDVCn3JUljbfnOQss_wsBc0b-v26oIDwaU",
  authDomain: "iot-annymour.firebaseapp.com",
  databaseURL: "https://iot-annymour.firebaseio.com",
  projectId: "iot-annymour",
  storageBucket: "iot-annymour.appspot.com",
  messagingSenderId: "525446190743",
  appId: "1:525446190743:web:e28f968b6b238b96"
};
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  Bootstrap,
}).$mount('#app')
