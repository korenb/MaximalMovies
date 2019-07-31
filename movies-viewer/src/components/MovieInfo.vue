<template>
  <div class="movie-info" v-if="movie">
    <div class="movie-info_back" @click="goBack()">⮴</div>
    <div class="movie-info_title">Movie: {{movie.title}}</div>

    <div class="movie-info_poster" :style="{ backgroundImage: 'url('+movie.posterUrl+')' }"></div>

    <div class="movie-info_info">
      <div
        class="movie-info_original"
        v-if="movie.originalTitle"
      >Original title: <em>{{movie.originalTitle}}</em></div>
      <div class="movie-info_year">Distributed: <em>{{movie.year}}</em></div>
      <div class="movie-info_year" v-if="movie.rating">Rating: <em>{{movie.rating}} / 10</em></div>

      <h4>Description:</h4>

      <p v-html="movie.description"></p>
    </div>
  </div>
  <div v-else>
    <em>Loading...</em>
  </div>
</template>

<script>
import { store } from "../state/vuex.config";

export default {
  name: "MovieInfo",
  store,
  props: {
    id: {}
  },
  computed: {
    movie() {
      return this.$store.getters.getCurrentMovie;
    }
  },
  data: () => {
    return { loading: false };
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
  padding: 50px 0;
  max-width: 1050px;
  margin: 0 auto;
}
.movie-info .movie-info_back {
  display: inline-block;
  font-size: 4rem;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
  top: 7px;
  line-height: 0.1;
}
.movie-info .movie-info_title {
  font-size: 2.5rem;
  display: inline-block;
}
.movie-info .movie-info_original {
}
.movie-info .movie-info_poster {
  width: 230px;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
  margin-right: 1rem;
}
</style>