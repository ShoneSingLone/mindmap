let libs = [
    () => import( /* webpackChunkName: "show" */ './show'),
    () => import( /* webpackChunkName: "vue" */ '@lib/vue/dist/vue.js')
];

// import('./scss.styl');

Promise.all(libs.map(lib => lib()))
    .then(modules => {
        show = modules[0].default;
        Vue = modules[1].default;
        show('Webpack');
        new Vue({
            template: `<h1> el: "#app"</h1>`,
        }).$mount("#app");
    });