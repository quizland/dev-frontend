<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary justify-content-between">
    <div class="container-fluid">
      <div class="col-md-2">
        <router-link to="/dashboard" v-if="isLoggedIn"><i class="fas fa-home"></i> Dashboard </router-link>&nbsp;
        <router-link to="/about" v-if="!isLoggedIn"><i class="fas fa-file-signature"></i> About </router-link>&nbsp;
      </div>
      <div class="col-md-8">
        <router-link to="/" class="navbar-brand"><h1>QUIZ LAND</h1></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-md-2">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li v-if="isLoggedIn" class="nav-item"><span class="username" style="color: white">Hello {{currentUserName}} </span></li>
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link to="/login"><i class="fas fa-sign-in-alt"></i> Login</router-link>
            </li>&nbsp;&nbsp;&nbsp;
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link to="/register"><i class="fas fa-registered"></i> Register</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <button v-on:click="logout" class="btn btn-dark btn-sm"><i class="fas fa-power-off" aria-hidden="true"></i> Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Navbar',
  data () {
    return {
      isLoggedIn: false,
      currentUserEmail: '',
      currentUser: ''
    }
  },
  computed: {
    currentUserName () {
      return this.currentUserEmail.split('@')[0]
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUserEmail = firebase.auth().currentUser.email
    }
    this.$bus.$on('logged', (data) => {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true
        this.currentUserEmail = data
      }
    })
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isLoggedIn = false
          // this.$router.go({ path: this.$router.path })
          this.$router.go('/login')
        })
    },
    login: function () {
      this.isLoggedIn = true
    }
  }
}
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>
