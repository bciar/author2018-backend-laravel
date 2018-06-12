
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'raphael';
import 'wheelnav';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Tabs from 'vue-tabs-component';
import routes from './routes';
import Navigation from './components/Navigation/navigation.vue';
import Layout from './components/Layout/layout.vue';
import store from './store.js';

Vue.use(Tabs);
Vue.use(VueRouter);

export default Vue;


export var router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.component('layout', Layout);
Vue.component('page-navigation', Navigation);


new Vue({
    el: '#app',
    store: store,
    router: router,
    data: {
        // declare message with an empty value
        userName: ''
    },
});