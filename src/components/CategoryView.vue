<template>
  <div class="container">
    <h1>Category {{ categoryId }}</h1>
    <ul>
      <li v-for="(quiz, index) in categories[categoryIndex].quizes" :key="index">
        <div class="card" @click="choseQuiz(index)">
          {{ categoryId }}
          <br>
          Quiz No {{ index + 1 }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryView',
  props: ['categoryId'],
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    categories () {
      return this.$store.getters.getCategories
    },
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId)
    }
  },
  methods: {
    choseQuiz (index) {
      this.$router.push('/' + this.categoryId + '/quiz/' + (Number(index) + 1))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
