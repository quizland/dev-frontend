<template>
  <div class="container-fluid" v-if="loaded">
    <h1>Quiz Categories</h1>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <div class="card" @click="choseCategory(index)">
          <h4>
            <img :src="require('../assets/' + category.icon + '.png')" :alt="category.icon" class="icon"/>
            {{ category.category }}
          </h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../main'

export default {
  name: 'Dashboard',
  data () {
    return {
      loaded: false
    }
  },
  beforeCreate () {
    if (this.$store.getters.getCategories.length === 0) {
      let categories = []
      db.collection('categories').orderBy('category').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          categories.push(doc.data())
        })
        this.$store.commit('CATEGORIES', categories)

        let userStatistic = {
          quizesCompleted: 0,
          quizesTaken: {},
          averageProcentage: '0.00',
          averageTime: 0
        }
        db.collection('users').where('user', '==', firebase.auth().currentUser.email).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            userStatistic.quizesCompleted = doc.data().quizesCompleted
            userStatistic.averageProcentage = doc.data().averageProcentage
            userStatistic.averageTime = doc.data().averageTime
            userStatistic.quizesTaken = JSON.parse(doc.data().quizesTaken)
          })
          this.$store.commit('USERSTATISTIC', userStatistic)

          this.loaded = true
        })
      })
    }
  },
  mounted () {
    if (this.categories.length) {
      this.loaded = true
    }
  },
  computed: {
    categories () {
      return this.$store.getters.getCategories
    }
  },
  methods: {
    choseCategory (index) {
      this.$router.push('/' + this.categories[index].category + '/quizes')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.icon {
  width: 80px;
  height: 80px;
  padding: 10px;
  float: center;
}
.card:hover {
  background-color: #ECDEEC;
  cursor: pointer;
}
</style>
