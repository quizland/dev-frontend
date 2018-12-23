<template>
  <div class="container dashboard">
    <h1>Dashboard: Quiz Categories</h1>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <div class="card" @click="choseCategory(index)">
          {{ category.category}}
          <br>
          {{ category.icon}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      categories: [
        {
          category: 'JavaScript',
          icon: 'js-icon',
          quizes: [
            {
              question: 'question 1',
              answers: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
              ]
            },
            {
              question: 'question 2',
              answers: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
              ]
            }
          ]
        }, {
          category: 'jQuery',
          icon: 'jquery-icon',
          quizes: [
            {
              question: 'question 1',
              answers: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    choseCategory(index) {
      console.log(index);
      this.$router.push('/quizes/' + this.categories[index].category);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
