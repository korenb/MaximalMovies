<template>
  <div class="movie-list">
    <h1 class="movie-list_title">Cписок фильмов</h1>

    <ul>
      <li v-for="movie in movies" :key="movie.id">{{movie.title}}</li>
    </ul>

    <hr />

    <button
      type="button"
      @click="loadMore($event)"
      :disabled="loading"
      v-if="movies.length"
    >{{ loading ? 'Loading...' : 'Load more'}}</button>
  </div>
</template>

<script>
import * as actions from "../state/actions";
import { store } from "../state/vuex.config";

export default {
  name: "MovieList",
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
</style>
