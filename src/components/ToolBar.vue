<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  color: #FFFFFF;
  background-color: #42B883;
  display: flex;
  padding: 8px;
}

.header a {
  color: #FFFFFF;
}

.header .router-link-exact-active {
  color: #35495E;
}
</style>