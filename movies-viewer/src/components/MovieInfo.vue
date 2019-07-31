<template>
  <div class="movie-info">
    <h1>Фильм: {{movie.title}} ({{id}})</h1>
  </div>
</template>

<script>
import { store } from '../state/vuex.config';

export default {
  name: "MovieInfo",
  store,
  props: {
    id: Number
  },
  computed: {
    movie() {
      return this.$store.getters.getCurrentMovie(this.id);
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
};
</script>

<style>
.movie-info {
  padding-top: 50px;
}
</style>