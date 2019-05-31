import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAhn6sfeO1M9iNkQq38uBlHhNBZ4UQh0_U",
  authDomain: "iot-itcamp.firebaseapp.com",
  databaseURL: "https://iot-itcamp.firebaseio.com",
  projectId: "iot-itcamp",
  storageBucket: "iot-itcamp.appspot.com",
  messagingSenderId: "722034961108",
  appId: "1:722034961108:web:4543e2e475f7e74c"
};
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  Bootstrap,
}).$mount('#app')
