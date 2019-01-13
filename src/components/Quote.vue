<template>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default" @click="$emit('changeQuote')">
      <div class="panel-header quote">
        <p>Quote of the day:</p>
      </div>
      <div class="panel-body quote">
        <slot></slot>
        {{ "\"" + quote.quote + "\""}}
      </div>
      <div class="panel-footer quote">
        {{ quote.author}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: ['quote']
}
</script>

<style scoped>
.panel-header {
  margin: 50px 0px 0px 0px;
  font-family: 'Arizonia', cursive;
  font-size: 30px;
  color: #6e6e6e;
  text-align: center;
}
.panel-body {
  font-family: 'Arizonia', cursive;
  font-size: 28px;
  color: #6e6e6e;
  text-align: left;
}
.panel-footer {
  font-family: 'Arizonia', cursive;
  font-size: 30px;
  color: #6e6e6e;
  text-align: right;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: #ffe2e2;
}
</style>
