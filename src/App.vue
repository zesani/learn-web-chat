<template>
  <div id="app">
    <router-view :login-with-facebook="loginWithFacebook" :logout-with-facebook="logoutWithFacebook" :user="user" :history-chats="historyChats" :send-message="sendMessage"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCgO5Sy4n_iyhMtC7M95bQEmBL56GZankQ',
  authDomain: 'learn-web-chat.firebaseapp.com',
  databaseURL: 'https://learn-web-chat.firebaseio.com',
  storageBucket: 'learn-web-chat.appspot.com',
  messagingSenderId: '582561301491'
}
firebase.initializeApp(config)
var db = firebase.database()
var provider = new firebase.auth.FacebookAuthProvider()
window.onbeforeunload = function () {
  alert('I am an alert box!')
}
export default {
  name: 'app',
  data () {
    return {
      user: '',
      authentication: false,
      token: '',
      historyChats: [],
      connects: []
    }
  },
  mounted () {
    var vm = this
    vm.$bindAsArray('historyChats', db.ref('historyChats'))
    vm.$bindAsArray('connects', db.ref('connects'))
    // check ทุกครั้งว่ามีคน login อยู่หรือไม่
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user
        vm.authentication = true
        console.log(vm.connects)
        // if (vm.connects.find(connect => connect.uid.toString() === user.uid.toString()) === undefined) {
        //   vm.$firebaseRefs.connects.push({
        //     uid: user.uid
        //   })
        //   console.log('test')
        // }
        vm.$router.push('/chat')
      } else {
        vm.$router.push('/')
      }
    })
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // เข้าแค่ครังแรกที่กด Login จะได้ token มาใช้
        vm.token = result.credential.accessToken
        console.log('token' + vm.token)
      }
    })
  },
  methods: {
    loginWithFacebook () {
      firebase.auth().signInWithRedirect(provider)
    },
    logoutWithFacebook () {
      var vm = this
      firebase.auth().signOut().then(function () {
        vm.authentication = false
        vm.user = ''
      }, function (error) {
        console.log(error)
      })
    },
    sendMessage (user, message, time) {
      this.$firebaseRefs.historyChats.push({
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        message,
        time
      })
    }
  }
}
</script>

<style>
</style>
