<template>
  <div id="app">

    <Navbar />

    <div class="container">
      <router-view :key="$route.fullPath"/>
    </div>

    <modal-statistics v-if="showStatistics" @close="showStatistics = false" @clear="clearStatistics">
      <!-- you can use custom content here to overwrite default content -->
      <!-- <h3 slot="header">custom header</h3> -->
    </modal-statistics>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ModalStatistics from './components/ModalStatistics'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from './main'

export default {
  name: 'app',
  components: {
    Navbar,
    ModalStatistics
  },
  data () {
    return {
      showStatistics: false
    }
  },
  created () {
    this.$bus.$on('statistics', (data) => {
      this.showStatistics = true
    })
  },
  methods: {
    clearStatistics () {
      if(confirm('Are you sure to erase all your stats?')) {
        let userEmail = firebase.auth().currentUser.email
        let userStats = {
          user: userEmail,
          quizesCompleted: 0,
          quizesTaken: "{}",
          averageProcentage: "0.00",
          averageTime: 0
        }
        db.collection('users').where('user', '==', userEmail).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update(userStats)
            .then(() => {
              this.$store.commit('USERSTATISTIC', userStats)
              console.log('Statistics cleared!')
            });
          })
        })

      }
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: whitesmoke;
  padding: 20px
}

li {
  list-style: none;
}

nav {
  margin-bottom: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
