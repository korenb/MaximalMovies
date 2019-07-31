import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList.vue';
import MovieInfo from './components/MovieInfo.vue';

Vue.use(VueRouter);

import { store } from './state/vuex.config';
import * as actions from './state/actions';

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', redirect: '/movies' },
        { path: '/movies', component: MovieList },
        {
            path: '/movie/:id',
            component: MovieInfo,
            name: 'movie',
            props: true,
            beforeEnter: async (to, from, next) => {
                let id = to.params.id;
                await store.dispatch(actions.LOAD_MOVIE, id);
                next(vm => {
                    vm.id = id;
                });
            }
        },
        { path: '*', redirect: '/' }
    ],

});

router.afterEach(() => {
    window.scrollTo({
        top: 0
    });
})