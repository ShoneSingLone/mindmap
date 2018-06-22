<template>
  <H1>{{ msg }}</H1>
</template>

<script>
export default {
  name: "v-content",
  data() {
    return {
      msg: "D:\\GitHub\\mindmap\\project\\VuePractice\\elem-app\\src\\components\\content\\header.vue"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
