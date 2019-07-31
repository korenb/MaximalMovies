<template>
  <div class="movie-list">
    <h1 class="movie-list_title">Cписок фильмов ({{movies.length}})</h1>

    <div class="movie-list_grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCard>
    </div>

    <div class="movie-list_more-btn">
      <button
        type="button"
        class="btn"
        @click="loadMore($event)"
        :disabled="loading"
        v-if="movies.length"
      >{{ loading ? 'Loading...' : 'Load more'}}</button>
    </div>
  </div>
</template>

<script>
import * as actions from "../state/actions";
import { store } from "../state/vuex.config";
import MovieCard from "./MovieCard";

export default {
  name: "MovieList",
  components: {
    MovieCard
  },
  store,
  created() {
    this.$store.dispatch(actions.LOAD_MOVIES);
  },
  computed: {
    movies() {
      return this.$store.state.movies.items;
    }
  },
  data: () => {
    return { loading: false };
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.$store
        .dispatch(actions.LOAD_MOVIES, this.movies.length)
        .then(() => (this.loading = false))
        .catch(() => (this.loading = false));
    }
  }
};
</script>

<style>
.movie-list .movie-list_title {
  margin-bottom: 3rem;
}
.movie-list .movie-list_grid {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  margin-bottom: 2rem;
}
.movie-list .movie-list_more-btn {
  text-align: center;
}
.movie-list .movie-list_more-btn .btn{

}
</style>
