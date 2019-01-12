<template>
  <div class="container">
    <router-link :to="'/' + categoryId + '/quizes'">
      <h1>Category {{ categoryId }} <img :src="require('../assets/' + categories[categoryIndex].icon + '.png')" :alt="categories[categoryIndex].icon" class="icon"/></h1>
    </router-link>
    <h2>Quiz No: {{ quizId }}</h2>
    <div class="btn-group">
      <button class="btn btn-dark" @click="previousQuiz" :disabled="+quizId === 1">Previous quiz</button>
      <button class="btn btn-dark" @click="nextQuiz" :disabled="+quizId === categories[categoryIndex].quizes.length">Next quiz</button>
    </div>
    <br><br>
    <ul>
      <li v-for="(question, index) in categories[categoryIndex].quizes[quizIndex].quiz" :key="index" >
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
                <span style="color: green">Correct answer: {{ question.answers[question.correctAnswer] }}</span>&nbsp;&nbsp;&nbsp;
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
      <button class="btn btn-primary" @click="calculateResult" :disabled="quizTried">Check result</button>&nbsp;
      <button class="btn btn-warning" @click="showAnswers = !showAnswers" :disabled="disabledShowAnswers">{{showAnswers ? 'Hide' : 'Show'}} answers</button>
    </div>
    <br>
    <div class="card" v-if="showResult">
      <span v-if="Math.round(resultProcentage) === 100" style="color: red"><strong>CONGRATULATIONS {{currentUserName.toUpperCase()}}!</strong></span>
      <br v-if="Math.round(resultProcentage) === 100">
      <span>Your result: {{ resultProcentage }}%</span>
      <br>
      <!-- <span>Time for completion: {{ new Date(completionTime).toISOString().slice(-13, -5) }}</span> -->
      <span>Time for completion: {{ timeToString(completionTime) }}</span>
    </div>
    <br>
    <div class="btn-group">
      <button class="btn btn-dark" @click="previousQuiz" :disabled="+quizId === 1">Previous quiz</button>
      <button class="btn btn-dark" @click="nextQuiz" :disabled="+quizId === categories[categoryIndex].quizes.length">Next quiz</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../main'

export default {
  name: 'QuizView',
  props: ['categoryId', 'quizId'],
  data () {
    return {
      pickedAnswers: [],
      disabledShowAnswers: true,
      showAnswers: false,
      showResult: false,
      quizTried: false,
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
    userStatistic () {
      return this.$store.getters.getUserStatistic
    },
    currentUserName () {
      return this.$store.getters.getCurrentUserName
    },
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId)
    },
    quizIndex () {
      return (Number(this.quizId) - 1)
    },
    showCheckResult () {
      return (this.pickedAnswers.filter(x => x !== undefined).length === this.categories[this.categoryIndex].quizes[this.quizIndex].quiz.length)
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
      let questions = this.categories[this.categoryIndex].quizes[this.quizIndex].quiz
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === questions[i].answers.indexOf(this.pickedAnswers[i])) {
          this.result++
        }
      }
      let endTime = new Date()
      this.completionTime = endTime - this.startTime
      this.updateStatistics()
      this.quizTried = true
      return this.result
    },
    updateStatistics () {
      let userEmail = firebase.auth().currentUser.email
      let count = this.userStatistic.quizesCompleted
      let quizesTaken = this.userStatistic.quizesTaken
      if (!quizesTaken.hasOwnProperty(this.categoryId)) {
        quizesTaken[this.categoryId] = []
      }
      if (!quizesTaken[this.categoryId].includes(this.quizId.toString())) {
        quizesTaken[this.categoryId].push(this.quizId.toString())
      }
      let userStats = {
        user: firebase.auth().currentUser.email,
        quizesCompleted: count + 1,
        quizesTaken: JSON.stringify(quizesTaken),
        averageProcentage: ((+this.userStatistic.averageProcentage * count + +this.resultProcentage) / (count + 1)).toFixed(2),
        averageTime: Math.round((this.userStatistic.averageTime * count + this.completionTime) / (count + 1))
      }

      db.collection('users').where('user', '==', userEmail).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update(userStats)
            .then(() => {
              userStats.quizesTaken = JSON.parse(userStats.quizesTaken)
              this.$store.commit('USERSTATISTIC', userStats)
              console.log('Statistics updated!')
            });
          })
        })
    },
    previousQuiz () {
      this.$router.replace('/' + this.categoryId + '/quiz/' + (Number(this.quizId) - 1))
    },
    nextQuiz () {
      this.$router.replace('/' + this.categoryId + '/quiz/' + (Number(this.quizId) + 1))
    },
    timeToString (timestamp) {
      let miliseconds = timestamp % 1000;
      let res = Math.floor(timestamp / 1000)
      let seconds = Math.floor(res % 60);
      let minutes = Math.floor(res / 60) % 60;
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '.' + miliseconds;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
