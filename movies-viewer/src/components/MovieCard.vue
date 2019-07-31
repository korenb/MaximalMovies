<template>
  <div class="movie-card">
    <div class="movie-card_poster" :style="{ backgroundImage: `url('${movie.posterUrl}')`}"></div>
    <div class="movie-card_info">
      <div class="movie-card_title">{{movie.title}}</div>
      <div class="movie-card_original">{{movie.originalTitle}} ({{movie.year}})</div>
      <div class="movie-card_rating" v-if="movie.rating">
        <span class="movie-card_rating-star">★</span>
        {{movie.rating}} / 10
      </div>

      <router-link :to="{name:'movie', params: {id: movie.id}}" class="btn">Read more</router-link>
    </div>
  </div>
</template>

<script>
import { Movie } from "../classes/movie";

export default {
  name: "MovieCard",
  props: {
    movie: Movie
  }
};
</script>

<style>
.movie-card {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.movie-card .movie-card_title {
  font-size: 1.75rem;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.movie-card .movie-card_original {
  font-style: italic;
}
.movie-card .movie-card_info {
  padding-left: 1rem;
}
.movie-card .movie-card_rating{
  margin-bottom: 1.5rem;
}
.movie-card .movie-card_rating-star {
  font-size: 1.75rem;
  color: #ffcd01;
  user-select: none;
  top: 2px;
  position: relative;
}
.movie-card .movie-card_poster {
  min-width: 160px;
  min-height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>