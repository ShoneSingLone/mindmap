<template>
　 <div class="main">
　　 <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/login">Go to Foo</router-link></li>
    </ul>
　 </div>
</template>
<script>
export default {
  data() {
    return {
      msg: `Welcome to ShoneSingLone'micro site`
    };
  }
};
</script>
<style scoped lang="scss">
　 .main {
  font-size: 14px;
  color: #58666e;
  background-color: #1c2b36;
}
</style>