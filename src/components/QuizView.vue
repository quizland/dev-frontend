<template>
  <div class="quiz">
    <h1>QuizView</h1>
    <h3>Category id: {{ categoryId }}</h3>
    <h3>Quiz id: {{ quizId }}</h3>
  </div>
</template>

<script>
export default {
  name: 'QuizView',
  props: ['categoryId', 'quizId'],
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
  mounted() {
    //this.categoryId = this.$router.params.categoryId;
    //this.quizId = this.$router.params.quizId;
  },
  methods: {
    choseCategory(index) {
      console.log(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
