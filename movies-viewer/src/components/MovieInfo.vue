<template>
  <div class="movie-info">
    <h1>Фильм: {{movie.title}} ({{id}})</h1>
  </div>
</template>

<script>
import { Movie } from "../classes/movie";

export default {
  name: "MovieInfo",
  created() {
    this.movie = new Movie();
    this.movie.title = "Interstellar";
  },
  props: {
    id: Number
  },
  data() {
    return {
      movie: null
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
.movie-info {
  padding-top: 50px;
}
</style>