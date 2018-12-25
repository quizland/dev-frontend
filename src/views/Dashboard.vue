<template>
  <div class="wrapper">
    <div class="welcome">
      <h1 class="welcome__text">Welcome to <span class="welcome__logo">Quiz Land</span></h1>
    </div>
    <div class="container-tests">
      <h2 class="container-tests__header">Choose a quiz</h2>
      <div class="container-tests__tests">
        <div>
          <router-link :to="{ name: 'Question', params:{ category: 'HTML', id: 1 } }" class="tests-link tests-link--html">Take a<br><span class="tests-link__topic--html">HTML</span><br>Test</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'Question', params:{ category: 'CSS', id: 1 } }" class="tests-link tests-link--css">Take a<br><span class="tests-link__topic--css">CSS</span><br>Test</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'Question', params:{ category: 'JavaScript', id: 1 } }" class="tests-link tests-link--javascript">Take a<br><span class="tests-link__topic--javascript">JavaScript</span><br>Test</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.wrapper {
  display: grid;
  align-content: center;
  height: 100%;
}

.welcome {
  background-color: #fff;
  padding: 2rem 0;
  border-radius: 2rem;
  margin-bottom: 3vw;

  &__text {
    font-weight: 100;
    font-size: 6.5rem;
    text-align: center;
  }

  &__logo {
    background: linear-gradient(#c2e59c, #64b3f4);
    background-clip: text;
    color: transparent;
    font-weight: bold;
  }
}

.container-tests {
  background-color: #fff;

  &__header {
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
    padding: 1.5rem 0;
    border-bottom: 0.5rem solid rgb(180, 206, 211);
  }

  &__tests {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
  }
}

.tests-link {
  display: block;
  background-color: #fff;
  text-align: center;
  font-size: 3rem;
  padding: 2rem 0;

  &--html:hover {
    background-color: #f1662a;
  }

  &--css:hover {
    background-color: #33a9dc;
  }

  &--javascript:hover {
    background-color: #f0db4f;
  }

  &__topic--html {
    color: #f1662a;
  }

  &__topic--css {
    color: #33a9dc;
  }

  &__topic--javascript {
    color: #f0db4f;
  }


}

.tests-link:link,
.tests-link:visited {
  color: #000;
  text-decoration: none;

  &:hover,
  &:hover .tests-link__topic--html,
  &:hover .tests-link__topic--css,
  &:hover .tests-link__topic--javascript {
    color: #fff;
  }
}

</style>
