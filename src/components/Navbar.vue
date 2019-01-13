<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary justify-content-between">
      <div class="container-fluid">
        <div class="col-md-2">
          <router-link to="/dashboard" v-if="isLoggedIn"><i class="fas fa-home"></i> Dashboard </router-link>&nbsp;
          <router-link to="/about" v-if="!isLoggedIn"><i class="fas fa-file-signature"></i> About </router-link>&nbsp;
        </div>
        <div class="col-md-8">
          <router-link to="/" class="navbar-brand"><h1>QUIZ LAND</h1></router-link>
        </div>
        <div class="col-md-2">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li v-if="isLoggedIn" class="nav-item"><span class="username" @click="$bus.$emit('statistics')">Hello {{currentUserName}} </span></li>
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
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Navbar',
  data () {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    currentUserName () {
      return this.$store.getters.getCurrentUserName
    }
  },
  created () {
    let currentUserEmail = ''
    let currentUserName = ''
    if (firebase.auth().currentUser) {
      currentUserEmail = firebase.auth().currentUser.email
      currentUserName = currentUserEmail.split('@')[0]
      this.$store.commit('CURRENTUSERNAME', currentUserName)
      this.isLoggedIn = true
    }
    this.$bus.$on('logged', (data) => {
      if (firebase.auth().currentUser) {
        currentUserEmail = data
        currentUserName = currentUserEmail.split('@')[0]
        this.$store.commit('CURRENTUSERNAME', currentUserName)
        this.isLoggedIn = true
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
    }
  }
}
</script>

<style scoped>
.email {
  padding-right: 10px;
}
.username {
  color: white;
}
.username:hover {
  cursor: pointer;
  color: black;
}
.navbar-brand {
  color: white;
}
</style>
