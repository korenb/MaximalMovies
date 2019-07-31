<template>
  <div id="app">
    <MovieList />
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";

export default {
  name: "app",
  components: {
    MovieList
  }
};
</script>

<style>
#app {
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
}
</style>
