<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
}

body {
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    height: 100vh;
    background-image: linear-gradient(to left top, #c2e59c, #64b3f4);
    display:flex;
    justify-content: center;
}

#app {
  max-width: 104rem;
  width: 100%;
}
</style>
