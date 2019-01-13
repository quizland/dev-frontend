<template>
  <div id="app">

    <Navbar />

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2" v-if="showQuotes">
          <!-- <button @click="addnum">add quote id</button> -->
          <quote :quote="quote" @changeQuote="getRandomQuote"></quote>
        </div>
        <div class="col-md-10">
          <router-view :key="$route.fullPath"/>
        </div>
      </div>
    </div>

    <modal-statistics v-if="showStatistics" @close="showStatistics = false" @clear="clearStatistics">
      <!-- you can use custom content here to overwrite default content -->
      <!-- <h3 slot="header">custom header</h3> -->
    </modal-statistics>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Quote from './components/Quote.vue'
import ModalStatistics from './components/ModalStatistics.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from './main'

export default {
  name: 'app',
  components: {
    Navbar,
    Quote,
    ModalStatistics
  },
  data () {
    return {
      showStatistics: false,
      showQuotes: true,
      quoteCount: 133,
      quote: {}
    }
  },
  created () {
    this.$bus.$on('statistics', (data) => {
      this.showStatistics = true
    })
  },
  mounted () {
    this.getRandomQuote()
  },
  methods: {
    clearStatistics () {
      if (confirm('Are you sure to erase all your stats?')) {
        let userEmail = firebase.auth().currentUser.email
        let userStats = {
          user: userEmail,
          quizesCompleted: 0,
          quizesTaken: '{}',
          averageProcentage: '0.00',
          averageTime: 0
        }
        db.collection('users').where('user', '==', userEmail).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update(userStats)
            .then(() => {
              this.$store.commit('USERSTATISTIC', userStats)
              console.log('Statistics cleared!')
            })
          })
        })
      }
    },
    getRandomQuote () {
      let quote = {
        quote: '',
        author: '',
        quoteId: 0
      }
      let randomId = Math.floor(Math.random() * this.quoteCount)
      db.collection('quotes').where('quoteId', '==', randomId).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          quote.quote = doc.data().quote
          quote.author = doc.data().author
          quote.quoteId = doc.data().quoteId
          console.log('data: ', doc.data())
        })
        this.quote = quote
      })
    }
    // addnum () {
    //   let i = 0
    //   db.collection('quotes').get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         let quote = doc.data()
    //         quote.qouteId = i++;
    //         doc.ref.update(quote)
    //         .then(() => {
    //
    //         })
    //       })
    //     })
    // }
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
</style>
