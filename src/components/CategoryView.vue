<template>
  <div class="container category">
    <h1>Category View</h1>
    <h3>Category id: {{ categoryId }}</h3>
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
    //this.categoryIndex = this.categories.findIndex(x => x.category === this.categoryId);
  },
  computed: {
    categoryIndex () {
      return this.categories.findIndex(x => x.category === this.categoryId);
    }
  },
  methods: {
    choseQuiz(index) {
      console.log(index);
      this.$router.push('/quizes/' + this.categoryId + '/' + (Number(index) + 1));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
