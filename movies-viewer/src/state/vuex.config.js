import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as actions from './actions';
import { loadMovies, loadMovie } from '../api/movies';
import { Movie } from '../classes/movie';
import { calcTakeParameter } from '../util';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: {
            items: [],
            current: null,
            initialLoad: false,
            loaded: false
        }
    },
    mutations: {
        [mutations.ADD_MOVIES](store, items) {
            store.movies.items = [...store.movies.items, ...items];
        },
        [mutations.MARK_MOVIES_AS_LOADED](store) {
            store.movies.loaded = true;
        },
        [mutations.MARK_MOVIES_AS_INITIALLY_LOADED](store) {
            store.movies.initialLoad = true;
        },
        [mutations.SET_CURRENT_MOVIE](store, movie) {
            store.movies.current = movie;
        }
    },
    getters: {
        getCurrentMovie: state => {
            return state.movies.current;
        }
    },
    actions: {
        async [actions.LOAD_MOVIES]({ commit, state }, skip) {
            if (state.movies.loaded) return;
            if (!skip && state.movies.initialLoad) return;

            const chunkSize = calcTakeParameter();

            await loadMovies(chunkSize, skip)
                .then(data => {
                    commit(mutations.ADD_MOVIES, data.map(obj => Movie.fromObj(obj)));

                    commit(mutations.MARK_MOVIES_AS_INITIALLY_LOADED);
                    if (data.length < chunkSize) {
                        commit(mutations.MARK_MOVIES_AS_LOADED);
                    }
                });
        },

        async [actions.LOAD_MOVIE]({ commit, state }, movieId) {
            if (!movieId) return;
            if (state.movies.current && state.movies.current.id === movieId) return;

            await loadMovie(movieId)
                .then(data => {
                    commit(mutations.SET_CURRENT_MOVIE, Movie.fromObj(data));
                });
        }
    }
})