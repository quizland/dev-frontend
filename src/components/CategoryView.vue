<template>
  <div class="container">
    <h1>Category {{ categoryId }}</h1>
    <ul>
      <li v-for="(quiz, index) in categories[categoryIndex].quizes" :key="index">
        <div class="card" @click="choseQuiz(index)">
          <h4>
            <img :src="require('../assets/' + categories[categoryIndex].icon + '.png')" :alt="categories[categoryIndex].icon" class="icon"/>
            {{ categoryId }}
          </h4>
          <br>
          <h4>
            Quiz No {{ index + 1 }}
            <span v-if="checkIfQuizTaken(index + 1)" style="color: pink"> (tried)</span>
            <span v-else style="color: GreenYellow"> (not tried)</span>
          </h4>
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
    userStatistic () {
      return this.$store.getters.getUserStatistic
    },
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId)
    }
  },
  methods: {
    choseQuiz (index) {
      this.$router.push('/' + this.categoryId + '/quiz/' + (Number(index) + 1))
    },
    checkIfQuizTaken (quizId) {
      if (this.userStatistic.quizesTaken[this.categoryId] && this.userStatistic.quizesTaken[this.categoryId].includes(quizId.toString())) {
        return true
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
