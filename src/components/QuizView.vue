<template>
  <div class="container">
    <h1>Category {{ categoryId }}</h1>
    <h2>Quiz No: {{ quizId }}</h2>
    <ul>
      <li v-for="(question, index) in categories[categoryIndex].quizes[quizIndex]" :key="index" >
        <form>
          <div class="card">
            <!-- <h5>{{ question.question }}</h5> -->
            <h5 v-html="question.question"></h5>
            <ul>
              <li v-for="(answer, j) in question.answers" :key="j">
                <label class="radio">
                    <input type="radio" name="answer" :value="answer" v-model="pickedAnswers[index]">
                    <span> {{answer}} </span>
                </label>
              </li>
              <div v-if="showAnswers">
                <span style="color: green">Correct answer: {{ question.answers[question.correctAnswer] }}</span>&nbsp;
                <span :style="'color: ' + (pickedAnswers[index] === question.answers[question.correctAnswer] ? 'green' : 'red')">
                  Your answer: {{ pickedAnswers[index] }}
                </span>
              </div>
            </ul>
          </div>
        </form>
      </li>
    </ul>

    <div v-if="showCheckResult">
      <button class="btn btn-primary" @click="calculateResult">Check result</button>&nbsp;
      <button class="btn btn-warning" @click="showAnswers = !showAnswers" :disabled="disabledShowAnswers">{{showAnswers ? 'Hide' : 'Show'}} answers</button>
    </div>

    <br>
    <div class="card" v-if="showResult">
      <span>Your result: {{ resultProcentage }}%</span>
      <br>
      <span>Time for completion: {{ new Date(completionTime).toISOString().slice(-13, -5) }}</span>
    </div>
    <br>

    <div class="btn-group">
      <button class="btn btn-dark" @click="previousQuiz" :disabled="+quizId === 1">Previous quiz</button>
      <button class="btn btn-dark" @click="nextQuiz" :disabled="+quizId === categories[categoryIndex].quizes.length">Next quiz</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'QuizView',
  props: ['categoryId', 'quizId'],
  data () {
    return {
      pickedAnswers: [],
      disabledShowAnswers: true,
      showAnswers: false,
      showResult: false,
      startTime: 0,
      completionTime: 0,
      result: 0
    }
  },
  mounted () {
    this.startTime = new Date()
  },
  computed: {
    categories () {
      return this.$store.getters.getCategories
    },
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId)
    },
    quizIndex () {
      return (Number(this.quizId) - 1)
    },
    showCheckResult () {
      return (this.pickedAnswers.filter(x => x !== undefined).length === this.categories[this.categoryIndex].quizes[this.quizIndex].length)
    },
    resultProcentage () {
      return (this.result / this.pickedAnswers.length * 100).toFixed(2)
    }
  },
  methods: {
    calculateResult () {
      this.disabledShowAnswers = false
      this.showResult = true
      this.result = 0
      let questions = this.categories[this.categoryIndex].quizes[this.quizIndex]
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === questions[i].answers.indexOf(this.pickedAnswers[i])) {
          this.result++
        }
      }
      let endTime = new Date()
      this.completionTime = endTime - this.startTime
      return this.result
    },
    previousQuiz () {
      this.$router.replace('/' + this.categoryId + '/quiz/' + (Number(this.quizId) - 1))
    },
    nextQuiz () {
      this.$router.replace('/' + this.categoryId + '/quiz/' + (Number(this.quizId) + 1))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
