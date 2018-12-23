<template>
  <div class="quiz">
    <h1>Quiz View</h1>
    <h3>Category id: {{ categoryId }}</h3>
    <h3>Quiz id: {{ quizId }}</h3>
    <ul>
      <li v-for="(question, index) in categories[categoryIndex].quizes[quizIndex]" :key="index" >
        <form>
          <div class="card">
            <h5>{{ question.question }}</h5>
            <ul>
              <li v-for="(answer, j) in question.answers" :key="j">
                <label class="radio">
                    <input type="radio" name="answer" :value="answer" v-model="pickedAnswers[index]">
                    <span>{{answer}}</span>
                </label>
              </li>
            </ul>
          </div>
        </form>
      </li>
    </ul>
    <div class="btn-toolbar row" role="toolbar" aria-label="Toolbar with button groups" v-if="showCheckResult">
      <div class="btn-group mr-2 mx-auto" role="group" aria-label="First group">
        <button class="btn btn-primary" @click="calculateResult">Check result</button>
      </div>
      <div class="btn-group mr-2 mx-auto" role="group" aria-label="Second group">
        <button class="btn btn-secondary" @click="showAnswers = true" :disabled="disabledShowAnswers">Show answers</button>
      </div>
    </div>
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
            [
              {
                question: 'question 1',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4'
                ],
                correctAnswer: 0
              },
              {
                question: 'question 2',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4',
                ],
                correctAnswer: 2
              }
            ],
            [
              {
                question: 'question 1',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4'
                ],
                correctAnswer: 1
              },
              {
                question: 'question 2',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4',
                ],
                correctAnswer: 2
              }
            ]
          ]
        }, {
          category: 'jQuery',
          icon: 'jquery-icon',
          quizes: [
            [
              {
                question: 'question 1',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4'
                ],
                correctAnswer: 0
              },
              {
                question: 'question 2',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4',
                ],
                correctAnswer: 2
              }
            ],
            [
              {
                question: 'question 1',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4'
                ],
                correctAnswer: 0
              },
              {
                question: 'question 2',
                answers: [
                  'answer1',
                  'answer2',
                  'answer3',
                  'answer4',
                ],
                correctAnswer: 3
              }
            ]
          ]
        }
      ],
      pickedAnswers: [],
      disabledShowAnswers: true,
      showAnswers: false,
    }
  },
  mounted() {
    //this.categoryId = this.$router.params.categoryId;
    //this.quizId = this.$router.params.quizId;
    console.log(this.categories[this.categoryIndex].quizes[this.quizIndex]);
  },
  computed: {
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId);
    },
    quizIndex () {
      return (Number(this.quizId) - 1);
    },
    showCheckResult () {
      return (this.pickedAnswers.filter(x => x !== undefined).length === this.categories[this.categoryIndex].quizes[this.quizIndex].length);
    }
  },
  methods: {
    calculateResult() {
      this.disabledShowAnswers = false;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
