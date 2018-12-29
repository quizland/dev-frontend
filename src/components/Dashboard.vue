<template>
  <div class="container" v-if="loaded">
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
import db from '../main'

export default {
  name: 'Dashboard',
  data () {
    return {
      loaded: false
    }
  },
  beforeCreate () {
    let categories = []
    db.collection('categories').orderBy('category').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        categories.push(doc.data())
      })
      this.$store.commit('CATEGORIES', categories)
      this.loaded = true
    })
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
</style>
