<template>
　 <div class="main">
　　 <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/login">Login</router-link></li>
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
* {
  margin: unset;
  padding: unset;
}
li {
  list-style: none;
}
.main {
  font-size: 14px;
  color: #62b982;
  background-color: #1c2b36;
}
a {
  &:hover {
    color: #62b982;
  }
  &:link {
    color: #62b982;
  }
  &:visited {
    color: #62b982;
  }
}
</style>