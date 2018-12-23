<template>
  <div class="container">
    <h1>Quiz Categories</h1>
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
  name: "Dashboard",
  data() {
    return {
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    choseCategory(index) {
      this.$router.push("/" + this.categories[index].category + "/quizes");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  background-color: whitesmoke;
}

li {
  list-style: none;
}
</style>
