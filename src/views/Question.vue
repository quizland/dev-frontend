<template>
  <div>
    <div class="current-test">
      <h2 :class="`current-test__header tests-link__topic--${category.toLowerCase()}`">{{ category }}</h2>
    </div>
    <div class="question">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida quis lacus eget semper. Nulla volutpat neque eleifend lacinia auctor. Nullam non egestas lectus. Aliquam vel vehicula sapien?</p>
    </div>
    <div class="answers">
      <div class="answers__box">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="answers__box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor</p>
      </div>
      <div class="answers__box">
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div class="answers__box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'category'],
  data() {
    return {

    }
  },
  methods: {
    doSmth() {
      console.log(this.id, this.category)
    }
  },
  watch: {
    '$route'(to) {
      this.id = to.params.id
      this.doSmth()
    }
  },
  created() {
    this.doSmth()
  }
}
</script>

<style lang="scss">
.current-test {
  background-color: #fff;
  padding: 1rem 0;
  border-radius: 2rem;
  margin-bottom: 7vw;
  margin-top: 3vw;
  
  &__header {
    font-size: 4rem;
    text-align: center;
  }
}

.question {
  background-color: #fff;
  padding: 2rem 2rem;
  border-radius: 2rem;
  font-size: 2rem;
  margin-bottom: 3vw;
}

.answers {
  display: grid;
  grid-gap: 1vw;

  &__box {
    background-color: #fff;
    padding: 2rem 2rem;
    border-radius: 2rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(#000,.2);
    }
  }
}
</style>
