require('./bootstrap');

// Include all require from vue js<!-- ✗ BAD --><!-- ✓ GOOD -->
window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

// show the list post templete
const Listposts = Vue.component('Listposts', require('./components/Listposts.vue'));

// add post templete {create}
const Addpost = Vue.component('Addpost', require('./components/Addpost.vue'));

// edit post templete {update}
const Editpost = Vue.component('Editpost', require('./components/Editpost.vue'));

// delete post templete {delete}
const Deletepost = Vue.component('Deletepost', require('./components/Deletepost.vue'));

// view single post templete
const Viewpost = Vue.component('Viewpost', require('./components/Viewpost.vue'));

// Registering modules
Vue.use(VueRouter,VueAxios, axios);

const routes = [
    {
      name: 'Listposts',
      path: '/',
      component: Listposts
    },
    {
      name: 'Addpost',
      path: '/add-post',
      component: Addpost
    },
    {
      name: 'Editpost',
      path: '/edit/:id',
      component: Editpost
    },
    {
      name: 'Deletepost',
      path: '/post-delete',
      component: Deletepost
    },
    {
      name: 'Viewpost',
      path: '/view/:id',
      component: Viewpost
    }
  ];
  
  const router = new VueRouter({ mode: 'history', routes: routes});
  
  new Vue(
   Vue.util.extend(
   { router },
   AppLayout
   )
  ).$mount('#app');