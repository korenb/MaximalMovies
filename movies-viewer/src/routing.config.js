import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList.vue';
import MovieInfo from './components/MovieInfo.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', redirect: '/movies' },
        { path: '/movies', component: MovieList },
        { path: '/movie/:id', component: MovieInfo, name: 'movie', props: true },
        { path: '*', redirect: '/' }
    ]
});